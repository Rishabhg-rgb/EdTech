import React from 'react'

const Downbar = () => {
  return (
    <div className='fixed bg-white shadow-md bottom-0 flex justify-evenly w-full py-5 items-center  md:hidden lg:hidden xl:hidden'>
        <h2 className='text-xl'> <a href=""> Menu</a></h2>
        <h2 className='text-xl'> <a href=""> Category</a></h2>
        <h2 className='text-xl'> <a href=""> Contact</a></h2>
    </div>
  )
}

export default Downbar