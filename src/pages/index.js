import Head from "next/head";
import Image from "next/image";
import Nav from "../components/nav";
import Search from "../components/search";
import Cards from "../components/cards";
import Footer from "../components/footer";
import styles from "@/styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  const [location, setLocation] = useState("london");
  const [found, setFound] = useState(false);

  function changeLocation(location) {
    setLocation(location);
  }
  function changeFound(found) {
    setFound(found);
  }
  return (
    <>
      <Head>
        <title>Weather App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Nav />
        <Search changeLocation={changeLocation} location={location} />
        <div>{location}</div>
        <Cards location={location} changeFound={changeFound} found={found} />
        <Footer />
      </main>
    </>
  );
}
