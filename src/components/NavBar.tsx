import React from 'react'
import NavBarItem from './NavBarItem'

export default function NavBar() {
  return (
    <div className="flex dark:bg-gray-500 bg-amber-100 p-5 lg:text-lg justify-center gap-4">
        <NavBarItem title="Trending" param="fetchTrending"/>
        <NavBarItem title="Top Rated" param="fetchTopRated"/>

    </div>
  )
}
