import React from 'react'

const EducationExperience = () => {
  return (
    <div className='max-w-full grid grid-col-1 sm:flex  border-white'>
        <div className='sm:w-1/2 pt-mobilem mb-mobilem '>
            <div className='w-full rounded-mainradius md:pl-6 pl-4 py-4 md:py-6 bg-gradient-to-r from-[#1f1f1f] to-[#141414c7]'>
                <p className='text-white md:pb-4'>  EXPERIENCE</p>
                <p className='text-color md:pb-3'>  2008-2023</p>
                <p className='text-white'>  Framer Designer & Developer</p>
                <p className='text-color md:pb-7'> Bluebase Designs</p>
                <p className='text-color md:pb-2'> 2017 - 2023</p>
                <p className='text-white'> Front-End Developer</p>
                <p className='text-color md:pt-1'> Larsen & Toubro</p>
            </div>
        </div>
        <div className='w-full sm:w-1/2 sm:ml-mobilem sm:pt-mobilem'>
            <div className=' rounded-mainradius md:pl-6 md:py-6 pl-4 py-4 bg-gradient-to-r from-[#1f1f1f] to-[#141414c7]'>
                <p className='text-white md:pb-4'>EDUCATION</p>
                <p className=' text-color md:pb-3'>2008 -2023</p>
                <p className='text-white'>Framer Designer & Developer</p>
                <p className='text-color md:pb-7'>Bluebase Designs</p>
                <p className='text-color md:pb-2'>2017 - 2023</p>
                <p className='text-white'>Front-End Developer</p>
                <p className='text-color md:pt-1'>larsen & Toubro</p>
            </div>

        </div>
    </div>
  )
}

export default EducationExperience