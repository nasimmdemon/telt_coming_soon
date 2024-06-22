import Head from "next/head";
import styles from "./styles/Home.module.css";
import logoImage from "./launching-soon-image.jpeg";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Launching Soon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.title}>Launching soon</h1>
          <p className={styles.description}>
            Tech doesn’t have to feel like a different language. We built
            Schematiq to make sure innovation works for you, your business, and
            your people. We can’t wait to innovate with you!
          </p>
          <button className={styles.contactButton}>
            <a href="mailto:teltwebb@gmail.com">Contact Us</a>
          </button>
          <div className={styles.social}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={logoImage}
            alt="Launching Soon"
            className={styles.image}
          />
        </div>
      </main>
    </div>
  );
}
