import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import ClipboardJS from "clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [link, setLink] = useState("");
  const [linkSSE, setLinkSSE] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const { origin } = location;
    setLink(`${origin}/proxy`);
    setLinkSSE(`${origin}/proxy-sse`);
    const clipboard = new ClipboardJS("#copy");
    clipboard.on("success", notify);
    return () => clipboard.destroy();
  }, []);

  const notify = () => {
    toast("🦄️ Copied !", { autoClose: 1600 });
    setCopied(true);
  };

  return (
    <>
      <Head>
        <title>ChatGPT Proxy</title>
        <meta name="description" content="ChatGPT Proxy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <div className={styles.titleBox}>
            <h1 className={styles.title}>ChatGPT Proxy</h1>
            <h1
              className={styles.titleMask}
              style={copied ? { height: 0 } : {}}
            >
              ChatGPT Proxy
            </h1>
          </div>
        </div>
        <div className={styles.content}>
          <h3>Your proxy link:</h3>
          <p>
            <code className={styles.code}>{link}</code>
            <svg
              id="copy"
              className={styles.copyIcon}
              data-clipboard-text={link}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M9 18q-.825 0-1.412-.587Q7 16.825 7 16V4q0-.825.588-1.413Q8.175 2 9 2h9q.825 0 1.413.587Q20 3.175 20 4v12q0 .825-.587 1.413Q18.825 18 18 18Zm0-2h9V4H9v12Zm-4 6q-.825 0-1.413-.587Q3 20.825 3 20V7q0-.425.288-.713Q3.575 6 4 6t.713.287Q5 6.575 5 7v13h10q.425 0 .713.288q.287.287.287.712t-.287.712Q15.425 22 15 22ZM9 4v12V4Z"
              />
            </svg>
          </p>
          <p>
            <code className={styles.code}>{linkSSE}</code>
            <svg
              id="copy"
              className={styles.copyIcon}
              data-clipboard-text={linkSSE}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M9 18q-.825 0-1.412-.587Q7 16.825 7 16V4q0-.825.588-1.413Q8.175 2 9 2h9q.825 0 1.413.587Q20 3.175 20 4v12q0 .825-.587 1.413Q18.825 18 18 18Zm0-2h9V4H9v12Zm-4 6q-.825 0-1.413-.587Q3 20.825 3 20V7q0-.425.288-.713Q3.575 6 4 6t.713.287Q5 6.575 5 7v13h10q.425 0 .713.288q.287.287.287.712t-.287.712Q15.425 22 15 22ZM9 4v12V4Z"
              />
            </svg>
          </p>
        </div>
        <div className={styles.faq}>
          <h3>What's this?</h3>
          <p>
            <a
              href="https://github.com/imyuanx/chatgpt-proxy#introduction"
              target="_blank"
            >
              See more
            </a>
          </p>
          <h3>How to use?</h3>
          <p>
            <a
              href="https://github.com/imyuanx/chatgpt-proxy#how-to-use"
              target="_blank"
            >
              See more
            </a>
          </p>
        </div>
        <footer className={styles.footer}>
          {"yuanx@ "}
          <a href="https://github.com/imyuanx" target="_blank">
            GitHub
          </a>
          {" | "}
          <a href="https://twitter.com/imyuanx" target="_blank">
            Twitter
          </a>
        </footer>
      </main>
      <ToastContainer />
    </>
  );
}
