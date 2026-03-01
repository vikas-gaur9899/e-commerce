import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm '>
        <div src={assets.logo} className='mb-5 w-32'>
            <p className='w-full md:w-2/3 text-gray-600'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius et ipsam rerum corporis, voluptate ipsum temporibus quod aliquid cumque, neque fugiat ut asperiores cum praesentium magni! Dignissimos qui amet accusamus.
            </p>

        </div>
      </div>
    </div>
  )
}

export default Footer
