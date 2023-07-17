import React, { useEffect } from "react";
import "../styles/globals.css";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    console.log("Puster du? 👉 tormod.flesjo@gmail.com.no");
  }, []);

  return (
    <div className='app-wrapper'>
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
