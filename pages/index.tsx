import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import {Farms} from '../components/Farms';
import farms from '../farms.json'
let farmsArray: any[] = [];

const Home: NextPage = () => {
  const postsPerPage = 25;
  const [postsToShow, setPostsToShow] = useState([]);
  const [next, setNext] = useState(25);

  const loopWithSlice = (start: any, end: any) => {
    const slicedPosts = farms.slice(start, end);
    const holdFarmsArray: any = [...farmsArray, ...slicedPosts];
    setPostsToShow(prev => ({...prev, postsToShow: holdFarmsArray}));
  };

  const handleShowMorePosts = () => {
    loopWithSlice(next, next + postsPerPage);
    setNext(next + postsPerPage);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-16">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Your {' '}
          <a className="text-lime-600" href="https://nextjs.org">
            Yield-Farming
          </a>
          {' '}
          Hub
        </h1>

        <div className="mt-3 text-2xl flex flex-col items-center space-y-2">
          <p>New to Ethereum or Decentralized Finance (DEFI)?</p>
          <Link href={"https://ethereum.org/en/defi/"} className="rounded-lg flex bg-lime-100 border border-lime-400 text-lime-900 hover:text-lime-900/60 focus:bg-lime-600 py-2 px-6 font-semibold text-lg transition-all ease-in-out duration-200 hover:bg-lime-300">
            Start Here
          </Link>
        </div>

        <div className="mt-6 flex max-w-4xl h-screen flex-wrap items-center justify-around sm:w-full">
          <Farms />
        </div>
      </main>
    </div>
  )
}

export default Home
