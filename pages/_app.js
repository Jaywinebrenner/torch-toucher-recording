import "../styles/app.scss";
import Router from "next/router";
import React, {useState, useRef, useEffect} from 'react'
import Head from "next/head";
import { emojiCursor } from 'cursor-effects';

function MyApp({ Component, pageProps }) {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    new emojiCursor({ emoji: ["🔥", "🔥", "🔥"] });
  }, [])


  useEffect(() => {
    const start = () => {
      console.log("start");
      setLoading(true);
    };
    const end = () => {
      console.log("findished");
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" sizes="32x32" href="/apple-touch-icon.png" />
      </Head>
    {loading ? (
      <div className="load-screen">

        <div className="loader"></div>
      </div>
    ) : (
      <>
      <Component {...pageProps} />
      </>
    )}
  </>
  )
}

export default MyApp
