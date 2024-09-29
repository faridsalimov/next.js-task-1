import Head from "next/head";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";

const roboto = localFont({
  src: "./fonts/Roboto-Regular.ttf",
  variable: "--font-roboto",
});

const inter = localFont({
  src: "./fonts/Inter-Regular.ttf",
  variable: "--font-inter",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Website</title>
        <meta name="description" content="My Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`${styles.page} ${roboto.variable} ${inter.variable}`}>
        <h1>Account Page</h1>
      </div>
    </>
  );
}
