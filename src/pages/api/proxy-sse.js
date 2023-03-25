export const config = { runtime: "edge" };

export default async function handler(req, res) {
  const {
    nextUrl: { pathname },
    method,
    headers,
    body,
  } = req;
  headers.delete("host");
  headers.delete("referer");

  let path = pathname.split("/proxy-sse");
  path.shift();
  path = path.join("");

  const url = `https://api.openai.com${path}`;
  const options = {
    headers: headers,
    method: method,
    body: body,
    redirect: "follow",
  };
  const modifiedRequest = new Request(url, options);
  try {
    const response = await fetch(modifiedRequest);
    const modifiedResponse = new Response(response.body, response);
    modifiedResponse.headers.set("Access-Control-Allow-Origin", "*");
    return modifiedResponse;
  } catch (e) {
    console.log("catch: ", e);
  }
}
