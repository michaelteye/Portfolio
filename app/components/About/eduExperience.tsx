import { motion } from 'framer-motion'
import React from 'react'


const EducationExperience = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
     className='max-w-full grid grid-col-1 sm:flex  border-white'>
        <div className='sm:w-1/2 pt-mobilem mb-mobilem '>
            <div className='w-full rounded-mainradius md:pl-6 pl-4 py-4 md:py-6 bg-gradient-to-r from-[#1f1f1f] to-[#141414c7]'>
                <p className='text-white md:pb-4'> EXPERIENCE</p>
                <p className='text-color md:pb-3'>  2021-2022</p>
                <p className='text-white'> BlueTicks Technology</p>
                <p className='text-color md:pb-7'>Frontend Development</p>
                <p className='text-color md:pb-2'> 2022 - 2023</p>
                <p className='text-white'>BezoMoney</p>
                <p className='text-color md:pt-1'>Full Stack Developer</p>
            </div>
        </div>
        <div className='w-full sm:w-1/2 sm:ml-mobilem sm:pt-mobilem'>
            <div className=' rounded-mainradius md:pl-6 md:py-6 pl-4 py-4 bg-gradient-to-r from-[#1f1f1f] to-[#141414c7]'>
                <p className='text-white md:pb-4'>EDUCATION</p>
                <p className=' text-color md:pb-3'>2015 -2018</p>
                <p className='text-white'>St Martin's Senior High School</p>
                <p className='text-color md:pb-7'>Science With IT as Moajor</p>
                <p className='text-color md:pb-2'>2019 - 2023</p>
                <p className='text-white'>GCTU</p>
                <p className='text-color md:pt-1'>Computer Engineering</p>
            </div>

        </div>
    </motion.div>
  )
}

export default EducationExperience