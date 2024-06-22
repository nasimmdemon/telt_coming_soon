import Head from "next/head";
import styles from "./styles/Home.module.css";
import logoImage from "./launching-soon-image.jpeg";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>UNDER UTVECKLING</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.title}>UNDER UTVECKLING</h1>
          <p className={styles.description}>SNART ÖPPNAR VI</p>
          <button className={styles.contactButton}>
            <a href="mailto:teltwebb@gmail.com">Kontakta oss</a>
          </button>
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
