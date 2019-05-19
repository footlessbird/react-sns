import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Link href="/about">
        <a>ABOUT</a>
      </Link>
      <h1>Hello, Next</h1>
    </>
  );
};

export default Home;
