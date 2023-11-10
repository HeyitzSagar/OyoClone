import React from "react";
import Image from "next/image";
import Header1 from "../components/Header1";
import Header2 from "@/components/Header2";
import Header3 from "@/components/Header3";
import Head from "next/head";
import Link from "next/link";
import Header4 from "@/components/Header4";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div>
    <Head>
      <title>OYO: India's best online hotel Booking Site for Sanitized stay.</title>
      <Link rel="icon" href="/icon.png"></Link>
      </Head>
      <Header1 />
      <Header2 />
      <Header3 />
      <Banner/>
      <Header4/>
      <Footer/>
    </div>
  );
};

export default Home;
