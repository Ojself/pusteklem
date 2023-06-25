import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [horsePosition, setHorsePosition] = useState(0);

  const handleClick = () => {
    const newIntervalId = setInterval(() => {
      let random = Math.random() * 5 + 2;
      setHorsePosition((prevPosition) => prevPosition - random);
    }, 80);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Pusteklem</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to <span>Pusteklem!</span>
        </h1>

        <p>🫂</p>
      </main>

      <footer style={{ position: "relative" }}>
        <p>
          Powered by{" "}
          <span
            onClick={handleClick}
            style={{
              cursor: "pointer",
              position: "absolute",
              transform: `translateX(${horsePosition}px)`,
            }}
          >
            🐎
          </span>
        </p>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        main p {
          text-decoration: none;
          color: inherit;
          font-size: 10rem;
        }
        main span {
          color: #0070f3;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
