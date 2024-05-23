import Image from 'next/image'
import React from 'react'

export default function loading() {
  return (
    <div className='flex justify-center'>
      <Image src={'C:\\Users\\maran\\Downloads\\MoviBuzz\\movibuzz\\public\\spinner-animated.svg'} alt="spinner" width="300" height="500"/>
    </div>
  )
}
