import "../styles/app.scss";
import Router from "next/router";
import React, {useState, useRef, useEffect} from 'react'

function MyApp({ Component, pageProps }) {

  const [loading, setLoading] = useState(false);
  console.log("LOAD?", loading);

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
    {loading ? (
      <div className="load-screen">
        {/* <img src="/spinner.gif"/> */}
        <div className="loader"></div>
      </div>
    ) : (
      <Component {...pageProps} />
    )}
  </>
  )
}

export default MyApp
