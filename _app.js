import { useEffect } from "react";
import { loadInitialData } from "../lib/loadData";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    loadInitialData();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
