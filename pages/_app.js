import "../styles/globals.css";
import Layout from "../components/Layout";
import { CookiesProvider } from "react-cookie";
import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { xqcEmotes } from "../data/logoEmotesXqc";

function MyApp({ Component, pageProps }) {
  const [headerImg, setHeaderImg] = useState("/images/xqc-logo.webp");

  function shuffle(array) {
    let orginalArr = [...array];
    let randomArr = [];
    let maxIndex = array.length - 1;
    while (maxIndex >= 0) {
      let tempRandom = Math.floor(Math.random() * (orginalArr.length - 1));
      randomArr.push(orginalArr[tempRandom]);
      orginalArr = orginalArr.filter((item) => item !== orginalArr[tempRandom]);
      maxIndex--;
    }
    return randomArr;
  }

  useEffect(() => {
    const numArr = [];
    for (let i = 0; i < xqcEmotes.length; i++) {
      numArr[i] = i;
    }

    const randomArr = shuffle(numArr);
    let index = 0;
    setTimeout(() => {
      setHeaderImg("/images/PepeLaugh.png");

      setInterval(() => {
        setHeaderImg(xqcEmotes[randomArr[index]].img);
        index++;
        if (index >= xqcEmotes.length) {
          index = 0;
        }
      }, 5000);
    }, 2000);
  }, []);
  pageProps = { headerImg, ...pageProps };
  return (
    <Layout headerImg={headerImg}>
      <Head>
        <title>XQC MASTERCHEF TIERLIST</title>
        <meta name="description" content="SEASON 4 ADDED NOW" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CookiesProvider>
        <Component {...pageProps} />
      </CookiesProvider>
    </Layout>
  );
}

export default MyApp;
