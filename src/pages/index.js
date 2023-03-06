import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [link, setLink] = useState("");

  useEffect(() => {
    const { origin } = location;
    setLink(`${origin}/proxy`);
  }, []);

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
          <h1>ChatGPT Proxy</h1>
          <p>
            Your proxy link:&nbsp;
            <code className={styles.code}>{link}</code>
          </p>
        </div>
      </main>
    </>
  );
}
