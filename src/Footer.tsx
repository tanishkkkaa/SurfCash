import * as React from 'react';
import twitterImg from './assets/X.png';
import instagramImg from './assets/ig.png';
import facebookImg from './assets/fb.png';
import twitchImg from './assets/twitch.png';

const Footer: React.FC = () => {
  return (
    <div className="bg-[#F7C59F] w-full md:h-[180px] h-[180px] flex sm:flex-row flex-col justify-center sm:justify-between items-center md:px-[80px] px-[60px]">
        <div className="font-normal font-nunito order-2 sm:order-1 sm:text-[16px] text-[14px] ">&copy; 2024 SurfCash. All rights reserved</div>
        <div className="flex order-1 sm:order-2 my-4 sm:my-0">
          <img src={twitterImg} alt="twitter" className="h-[32px] w-[32px] mr-4"/>
          <img src={instagramImg} alt="instagram" className="h-[32px] w-[32px] mr-4" />
          <img src={facebookImg} alt="facebook" className="h-[32px] w-[32px] mr-4" />
          <img src={twitchImg} alt="twitch" className="h-[32px] w-[32px] " />
        </div>
    </div>
  );
};

export default Footer;
