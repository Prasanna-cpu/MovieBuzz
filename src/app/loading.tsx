import Image from 'next/image'
import React from 'react'

export default function loading() {
  return (
    <div className='flex justify-center'>
      <Image src={'../public/spinner-animated.svg'} alt="spinner"/>
    </div>
  )
}
