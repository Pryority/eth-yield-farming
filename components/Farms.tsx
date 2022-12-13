import Link from 'next/link'
import React, { useState } from 'react'
import farms from '../farms.json'

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
      <div className='grid grid-cols-4 w-full justify-center'>
        {
          state.items.slice(0, state.visible)
          .map((farm: any, i:any) =>(
            <div key={i} className="flex relative p-2">
              <Link
              href={`https://${farm.url}`}
              className="flex flex-col w-56 transition-all ease-in-out duration-100 visited:text-sky-900 bg-lime-50-500 hover:bg-lime-300 rounded-xl border p-6 text-left hover:text-lime-900 focus:text-lime-50 focus:bg-lime-500"
              >
                <h3 className="text-2xl font-bold">{farm.name}</h3>
                <h2>{farm.symbol}</h2>
              </Link>
            </div>
          ))
        }
      </div>
      {state.visible < state.items.length &&
        <button onClick={loadMore} type="button" className="load-more bg-lime-400 rounded-lg relative justify-center flex w-full">
          <p className='transition-all ease-in-out duration-100 uppercase tracking-widest hover:mt-[1px] rounded-lg border border-lime-500 text-lime-900 absolute top-0 flex px-4 bg-lime-400 hover:bg-lime-500 hover:text-lime-50 focus:bg-lime-900 py-2'>Load more</p>
        </button>
      }
    </section>
  )
}