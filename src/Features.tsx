import React, { FC, ReactNode } from 'react';

const Features = () => {
  return (
    <div className="w-full lg:h-[480px] h-[350px] bg-[#004E89] flex items-center justify-center">
        <div className="lg:w-[50%] md:w-[60%] w-[90%] grid grid-rows-3 gap-5">
            <div className="bg-[#005CA3] h-[90px] pl-5 lg:pl-20 flex flex-col justify-center ">
                <div className="text-[#FFFFFF] font-nunito text-[20px]">Stability</div>
                <div className="text-[#FFFFFF] font-nunito text-[14px]">100% backed stablecoins</div>
            </div>
            <div className="bg-[#005CA3] h-[90px] pl-5 lg:pl-20 flex flex-col justify-center">
                <div className="text-[#FFFFFF] font-nunito text-[20px]">Accessibility</div>
                <div className="text-[#FFFFFF] font-nunito text-[14px]">Global instant payments</div>
            </div>
            <div className="bg-[#005CA3] h-[90px] pl-5 lg:pl-20 flex flex-col justify-center">
                <div className="text-[#FFFFFF] font-nunito text-[20px]">Flexibility</div>
                <div className="text-[#FFFFFF] font-nunito text-[14px]">Prepaid SurfCash Card</div>
            </div>
        </div>
    </div>
  );
};

export default Features;
