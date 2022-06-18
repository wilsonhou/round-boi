import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

// Go after the things that will probably be the hardest.
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Round Boi</title>
        <meta name="description" content="app to find roundest boi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen w-screen flex flex-col justify-center items-center">
        <h1 className="text-2xl text-center">Which Pokemon is the roundest?</h1>
        <div className="border rounded p-8 flex justify-between">
          <div className="h-36 w-36 bg-yellow-200">First</div>
          <div className="m-4">VS</div>
          <div className="h-36 w-36 bg-red-200">Second</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
