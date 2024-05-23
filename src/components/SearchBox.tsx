
"use client"

import React, { useState } from 'react'

import { useRouter } from 'next/navigation'

export default function SearchBox() {

    const router=useRouter()

    function handleSubmit(e:React.SyntheticEvent){
       e.preventDefault()
       router.push(`/search/${search}`)
    }


    const [search,setSearch]=useState('')
  return (
    <form className='flex justify-between px-5 max-w-6 mx-auto' onSubmit={handleSubmit}>
        <input type="text" className="h-14 w-100  rounded-md placeholder-slate-400 outline-none flex-1 bg-transparent" placeholder="Search" value={search} onChange={(e)=>setSearch(e.target.value)} />
        <button className="text-amber-600">Search</button>
    </form>
  )
}
