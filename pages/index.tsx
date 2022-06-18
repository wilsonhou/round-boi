import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Round Boi</title>
        <meta name="description" content="app to find roundest boi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className='text-5xl'>hi world !!</h1>
    </div>
  )
}

export default Home
