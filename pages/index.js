import React, { useState, useEffect } from "react";
import Head from "next/head";
import TopComponent from "../components/TopComponent";
import FadeIn from "react-fade-in";
import { Hearts } from "react-loader-spinner";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      <Head>
        <title>Sina Bastani</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨‍💻</text></svg>"
        />
      </Head>

      <main>
        {loading ? (
          <div className="loadingScreen">
            <FadeIn>
              <Hearts
                height="80"
                width="80"
                color="#ffffff"
                ariaLabel="hearts-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </FadeIn>
          </div>
        ) : (
          <TopComponent />
        )}
      </main>

      <footer className="footer"></footer>
    </div>
  );
}
