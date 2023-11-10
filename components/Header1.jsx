import Image from 'next/image'
import React from 'react'
import Blocks from './Blocks'

const Header1 = () => {
  return (
    <div className='flex justify-between border-b-2 border-gray-200 items-center h-20 px-10'>
     <Image src={'/logo.png'} alt='logo' width={80} height={120} />
    <div className=' h-full flex' >
        <Blocks title={'Become a member'} para={'Additonal 10% off on stays'}/>
        <Blocks title={'OYO for business'} para={'Trusted by 5000 corporates'}/>
        <Blocks title={'List your property'} para={'Start earning in 30 min'}/>
        <Blocks title={'Become a member'} para={'Additonal 10% off on stays'}/>
        <div className='flex items-center px-3'>
        <Image src={'/logo.png'} alt='logo' width={80} height={120} />
        <h3 className='font-bold'>Login/Signup</h3>
        </div>
    </div>   
    
     </div>
  )
}

export default Header1
