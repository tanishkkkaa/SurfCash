import React, { FC, ReactNode } from 'react';

const HeroSection = () => {
  return (
    <div className="bg-black h-screen w-full">
        <div className="z-[5] text-vw-16 font-wixmadefordisplay font-extrabold text-[#EFEFD0] flex justify-center items-center pt-[105px]"><h1>SURFCASH</h1></div>
        <div>
            <ul className="flex sm:flex-row flex-col items-center justify-center mt-[-5px] ">
                <li className="font-nunito text-[16px] text-[#EFEFD0] pr-4 sm:pt-0 pt-[20px]">Home</li>
                <li className="font-nunito text-[16px] text-[#EFEFD0] pr-4 sm:pt-0 pt-[10px]">Payments</li>
                <li className="font-nunito text-[16px] text-[#EFEFD0] pr-4 sm:pt-0 pt-[10px]">Cards</li>
            </ul>
        </div>
    </div>
  );
};
export default HeroSection;
