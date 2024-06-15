/* eslint-disable no-unused-vars */
import React from 'react';
import { assets } from '../../assets/assets';

const AppDownload = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center my-[5rem]'>
        <p className='font-semibold text-[2rem] text-center text-gray-900'>For Better Experience Download <br /> Hunger App</p>
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-7">
            <img src={assets.play_store} alt="icon" className='w-[12rem] cursor-pointer transform transition-transform hover:scale-105'/>
            <img src={assets.app_store} alt="icon" className='w-[12rem] cursor-pointer transform transition-transform hover:scale-105'/>
        </div>
      </div>
    </>
  )
}

export default AppDownload