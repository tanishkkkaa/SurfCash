import React from "react";
import twitter from "./assets/X.png";
import instagram from "./assets/ig.png";
import facebook from "./assets/fb.png";
import twitch from "./assets/twitch.png";


const Footer = () => {
  return (
    <div className="bg-[#F7C59F] w-full md:h-[180px] h-[180px] flex sm:flex-row flex-col justify-center sm:justify-between items-center md:px-[80px] px-[60px]">
        <div className="font-normal font-nunito order-2 sm:order-1 sm:text-[16px] text-[14px] ">&copy; 2024 SurfCash. All rights reserved</div>
        <div className="flex order-1 sm:order-2 my-4 sm:my-0">
          <img src={twitter} alt="twitter" className="h-[32px] w-[32px] mr-4"/>
          <img src={instagram} alt="instagram" className="h-[32px] w-[32px] mr-4" />
          <img src={facebook} alt="facebook" className="h-[32px] w-[32px] mr-4" />
          <img src={twitch} alt="twitch" className="h-[32px] w-[32px] " />
        </div>
    </div>
  );
};

export default Footer;
