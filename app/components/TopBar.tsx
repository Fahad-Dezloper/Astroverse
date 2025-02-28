import { ConnectButton } from '@rainbow-me/rainbowkit'
import React from 'react'

const TopBar = () => {
  return (
    <div className='w-full h-14 rounded-2xl my-4 flex items-center justify-end px-4 bg-red-300'>
      <ConnectButton />
    </div>
  )
}

export default TopBar