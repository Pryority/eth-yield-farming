import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import farms from '../farms.json'
import rpLogo from '../public/rp-logo.png'
import ahLogo from '../public/ah-logo.png'
import nftx from '../public/nftx.png'

type Props = {}

export const Farms = () => {
  const [state, setState]= useState({
    items: farms,
    visible: 16,
    error: false
  });
  
  const loadMore = () => {
    setState(prev => ({...prev, visible: prev.visible + 25}));
  }

  return (
    <section className='flex flex-col items-center space-y-8 py-8'>
      <div className='grid sm:grid-cols-2 md:grid-cols-4 w-full justify-center'>
        {
          state.items.slice(0, state.visible)
          .map((farm: any, i:any) =>(
            <div key={i} className="flex relative p-2">
              <Link
              href={`${farm.url}`}
              className={`${farm.name == "Rocket Pool" ? 'hover:bg-orange-500/40':''} ${farm.name == "Alpha Homora V2" ? 'hover:bg-blue-400/40 hover:text-sky-900':''} ${farm.name == "NFTx" ? 'hover:bg-red-400/40':''} flex h-[200px] justify-center flex-col w-56 transition-all ease-in-out duration-100 visited:text-sky-900 bg-lime-50-500 hover:bg-lime-300 rounded-xl border p-6 text-left hover:text-lime-900 focus:text-lime-50 focus:bg-lime-500 relative overflow-clip`}
              >
                {farm.name == "Rocket Pool" ? <Image src={rpLogo} alt="" className="object-fill scale-[2] md:scale-[3] opacity-50" /> : ""}
                {farm.name == "Alpha Homora V2" ? <Image src={ahLogo} alt="" className="object-fill scale-[2] md:scale-[3] opacity-25" /> : ""}
                {farm.name == "NFTx" ? <Image src={nftx} alt="" className="object-fill scale-[3.2] md:scale-[3] opacity-25" /> : ""}
                <div className={`${farm.name === "Rocket Pool" ? 'absolute text-orange-900' : "absolute"} ${farm.name === "NFTx" ? "text-red-600 hover:text-red-900" : ""}`}>
                  <h3 className="text-2xl font-bold">{farm.name}</h3>
                  <h2 className={`${farm.name == "Alpha Homora V2" ? "bg-blue-400":""} ${farm.name == "NFTx" ? "bg-red-400":""} ${farm.name == "Rocket Pool" ? "bg-orange-600":""} bg-lime-600 text-white text-xs p-1 rounded-lg w-fit`}>{farm.symbol}</h2>
                </div>
              </Link>
            </div>
          ))
        }
      </div>
      {state.visible < state.items.length &&
        <button onClick={loadMore} type="button" className="load-more bg-lime-400 rounded-lg relative justify-center flex w-full">
          <p className='transition-all ease-in-out duration-100 uppercase tracking-widest hover:mt-[1px] rounded-lg border border-lime-500 text-lime-900 absolute top-0 flex px-4 bg-lime-400/20 hover:bg-lime-500 hover:text-lime-50 focus:bg-lime-900 py-2'>Load more</p>
        </button>
      }
    </section>
  )
}