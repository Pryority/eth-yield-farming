import Link from 'next/link'
import React from 'react'

type Props = {}

export const Footer = (props: Props) => {
  return (
    <footer className="flex h-24 w-full items-center justify-center border-t">
        <div className="flex items-center justify-center space-x-2 text-slate-600">
          <p>Powered by </p>
          <Link href={"https://ens.domains/"} className="text-teal-600 font-bold hover:text-teal-800 transition-all ease-in-out duration-200">IPFS</Link>, <Link href={"https://ens.domains/"} className="text-sky-600 font-bold hover:text-sky-800 transition-all ease-in-out duration-200">ENS</Link>,
          <Link href={"https://ens.domains/"} className="text-yellow-500 font-bold hover:text-yellow-600 transition-all ease-in-out duration-200">Fleek</Link>
        </div>
      </footer>
  )
}