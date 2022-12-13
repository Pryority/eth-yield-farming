import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import {Farms} from '../components/Farms';
import farms from '../farms.json'
import { InformationCircleIcon, XCircleIcon } from '@heroicons/react/24/outline'

let farmsArray: any[] = [];

const Home: NextPage = () => {
  const postsPerPage = 25;
  const [postsToShow, setPostsToShow] = useState([]);
  const [next, setNext] = useState(25);
  const [showHelp, setShowHelp] = useState(false);

  const loopWithSlice = (start: any, end: any) => {
    const slicedPosts = farms.slice(start, end);
    const holdFarmsArray: any = [...farmsArray, ...slicedPosts];
    setPostsToShow(prev => ({...prev, postsToShow: holdFarmsArray}));
  };

  const handleShowMorePosts = () => {
    loopWithSlice(next, next + postsPerPage);
    setNext(next + postsPerPage);
  };

  const toggleShowHelp = () => {
    setShowHelp(!showHelp);
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-16">
      <Head>
        <title>Yield-Farming</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="flex w-full flex-col items-center justify-center max-w-sm sm:max-w-xl md:max-w-full sm:px-10 lg:px-20 text-center">
        <h1 className="text-2xl font-bold cursor-default">
          Your {' '}
          <span className="text-lime-600 text-6xl">
            Yield-Farming
          </span>
          {' '}
          Hub
        </h1>

        <section className='flex flex-col items-center space-y-3 w-full'>
          <div className="mt-4 text-base sm:text-lg md:text-2xl flex items-center space-x-2">
            <p className='cursor-default'>New to Ethereum?</p>
            <Link href={"https://ethereum.org/en/defi/"} className="rounded-lg flex bg-lime-100 border border-lime-400 text-lime-900 hover:text-lime-900/60 focus:bg-lime-600 py-1 px-4 font-semibold text-lg transition-all ease-in-out duration-200 hover:bg-lime-300">
              Start Here
            </Link>
          </div>

          {showHelp ? 
            (
              <div className='flex flex-col items-start space-y-8 text-base sm:text-md md:text-lg w-full max-w-5xl rounded-md bg-stone-300/20 p-4'>
                <div className='flex flex-col space-y-1 items-start'>
                  <div className='flex w-full items-center justify-between'>
                    <h2 className='font-medium text-2xl'>What is yield farming?</h2>
                    <XCircleIcon className='h-5 w-5  transition-all ease-in-out duration-75 hover:fill-stone-800 hover:text-stone-200 cursor-pointer' onClick={toggleShowHelp}/>
                  </div>
                  <p className="text-start">
                    Yield farming, also referred to as liquidity mining, is a way to generate rewards with cryptocurrency holdings. In simple terms, it means locking up cryptocurrencies and getting rewards.
                  </p>

                  <p className="text-start">
                    In some sense, yield farming can be paralleled with staking. However, there's a lot of complexity going on in the background. In many cases, it works with users called liquidity providers (LP) that add funds to liquidity pools.
                  </p>
                </div>

                <div className='flex flex-col space-y-1 items-start'>
                  <h3 className='font-medium text-2xl'>What is a liquidity pool?</h3>
                  <p className="text-start">
                    It's basically a smart contract that contains funds. In return for providing liquidity to the pool, LPs get a reward. That reward may come from fees generated by the underlying DeFi platform, or some other source.
                  </p>

                  <p className="text-start">
                    Some liquidity pools pay their rewards in multiple tokens. Those reward tokens then may be deposited to other liquidity pools to earn rewards there, and so on. You can already see how incredibly complex strategies can emerge quite quickly. But the basic idea is that a liquidity provider deposits funds into a liquidity pool and earns rewards in return.
                  </p>

                  <p className="text-start">
                    Yield farming is typically done using ERC-20 tokens on Ethereum, and the rewards are usually also a type of ERC-20 token. This, however, may change in the future. Why? For now, much of this activity is happening in the Ethereum ecosystem. 
                  </p>
                  <p className="text-start">
                    However, cross-chain bridges and other similar advancements may allow DeFi applications to become blockchain-agnostic in the future. This means that they could run on other blockchains that also support smart contract capabilities.
                  </p>
                  <p className="text-start">
                    Yield farmers will typically move their funds around quite a lot between different protocols in search of high yields. As a result, DeFi platforms may also provide other economic incentives to attract more capital to their platform. Just like on centralized exchanges, liquidity tends to attract more liquidity.
                  </p>
                </div>
              </div>
            ) : 
            (
              <div 
                className='flex items-center space-x-2 text-slate-600 hover:text-lime-800 transition-all ease-in-out duration-200 relative hover:scale-[1.02]'
                onClick={toggleShowHelp}
              >
                <button>What is Yield Farming?</button>
                <InformationCircleIcon className='h-5 w-5'/>
              </div>
            )
          }
        </section>
        

        <div className="mt-6 flex w-full h-fit items-center justify-center">
          <Farms />
        </div>
      </main>
    </div>
  )
}

export default Home
