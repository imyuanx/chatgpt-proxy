// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createParser } from "eventsource-parser";

async function myFetch(url, options) {
  const { timeout, ...fetchOptions } = options;
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout || 30000);

  try {
    const res = await fetch(url, {
      ...fetchOptions,
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
    return res;
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
}

async function* streamAsyncIterable(stream) {
  const reader = stream.getReader();
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        return;
      }
      yield value;
    }
  } finally {
    reader.releaseLock();
  }
}

export default async function handler(req, res) {
  const {
    query: { path },
    method,
    body,
    headers: { host, ...headers },
  } = req;

  const requestBody = typeof body === "object" ? JSON.stringify(body) : body;

  const options = {
    method,
    timeout: 30000,
    headers,
    body: requestBody,
    onMessage: (data) => {
      res.write("data: " + data + "\n\n");
      if (data.toString() === "[DONE]") {
        res.end();
      }
    },
  };

  try {
    const _path = path[0] === "/" ? path : `/${path}`;
    const response = await myFetch(`https://api.openai.com${_path}`, options);

    if (response.ok) {
      res.writeHead(response.status, response.headers);
      const parser = createParser(
        ({ type, data }) => type === "event" && options.onMessage(data)
      );

      if (!response.body.getReader) {
        const body = response.body;
        if (!body.on || !body.read) {
          throw new Error('unsupported "fetch" implementation');
        }
        body.on("readable", () => {
          let chunk;
          while (null !== (chunk = body.read())) {
            parser.feed(chunk.toString());
          }
        });
      } else {
        for await (const chunk of streamAsyncIterable(response.body)) {
          const str = new TextDecoder().decode(chunk);
          parser.feed(str);
        }
      }
    } else {
      response.json().then((err) => {
        res.status(response.status).json(err);
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
