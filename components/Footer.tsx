import Link from 'next/link'
import React from 'react'

type Props = {}

export const Footer = (props: Props) => {
  return (
    <footer className="flex h-24 w-full items-center justify-center border-t">
        <div className="flex items-center justify-center gap-2 text-slate-600">
          Powered by <Link href={"https://ens.domains/"} className="text-sky-600 font-bold hover:text-sky-800 transition-all ease-in-out duration-200">IPFS</Link>, <Link href={"https://ens.domains/"} className="text-sky-600 font-bold hover:text-sky-800 transition-all ease-in-out duration-200">ENS</Link>
        </div>
      </footer>
  )
}