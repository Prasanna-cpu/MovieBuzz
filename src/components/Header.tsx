import React from 'react'
import MenuItem from './MenuItem'
import { PiHouseLight } from "react-icons/pi";
import { FcAbout } from "react-icons/fc";
import Link from 'next/link';
import DarkModeToggler from './DarkModeToggler';


export default function Header() {
  return (
    <div className='flex justify-between items-center p-3 max-w-7xl mx-auto'>
        <div className='flex gap-4'>
            <MenuItem title="Home" address="/" Icon={PiHouseLight} />
            <MenuItem title="About" address="/about" Icon={FcAbout} />
        </div>
        <div className='flex items-center gap-4'>
          <DarkModeToggler/>
          <Link href={'/'} className='flex gap-1 items-center'>
            <span className='text-2xl font-bold bg-green-700 py-1 px-2 rounded-lg text-white cursor-pointer'>Movi</span>
            <span className='text-2xl font-bold bg-orange-600 py-1 px-2 rounded-lg text-black cursor-pointer'>Buzz</span>
          </Link>
        </div>
    </div>
  )
}
