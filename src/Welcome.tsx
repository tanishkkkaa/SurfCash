import React, { FC, ReactNode } from 'react';

const Welcome = () => {
  return (
    <div className="bg-[#FF6B35] h-auto sm:h-[380px] md:h-[435px] w-full overflow-hidden">
        <div className="w-[90%] sm:w-[600px] pt-[15px] sm:pt-[45px] md:pt-[66px] lg:ml-25vw ml-[10px] sm:ml-[35px] md:ml-20vw" >
            <div className="font-wixmadefordisplay text-black text-[32px] sm:text-[48px] leading-[1.2] font-extrabold pb-5 sm:pb-6 md:pb-8">Welcome to SurfCash!</div>
            <div className="font-nunito font-normal text-[20px] leading-[1.5em]">Dive into the future where transactional barriers are washed away by the tide. Wherever you are, whatever you need, we ride with you. We‘re SurfCash, the global banking experience as smooth as sea glass. We‘ve got your back with stablecoins that steady your economic ship. Say ‘Aloha’ to banking as refreshing as a sea breeze.</div>
        </div>
    </div>
  );
};

export default Welcome;
