import Image from 'next/image'
import React from 'react'

const SmallCard = ({image,location,distance}) => {
  return (
    <div className='flex items-center space-x-4 m-2 place-items-center mt-5 cursor-pointer rounded-xl hover:bg-[#191919] p-2 hover:scale-105 transition duration-200 transform ease-out'>
      {/* Left */}
      <div className='relative h-16 w-16'>
        <Image src={image} layout="fill" objectFit='contain' className='rounded-lg'/>
      </div>

      {/* Right */}
      <div className='text-white'>
        <h2 className='font-semibold'>{location}</h2>
        <h3 className='text-gray-400'>{distance}</h3>
      </div>
    </div>
  )
}

export default SmallCard