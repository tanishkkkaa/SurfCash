import React from "react";

const Banking = () => {
  return (
    <div className="bg-black w-full md:h-[450px] sm:h-[400px] h-[550px] flex justify-center items-center">
        <div className="lg:w-[70%] w-[90%] md:w-[80%]">
            <div className="font-wixmadefordisplay text-[#FF6B35] font-extrabold lg:text-[48px] md:text-[40px] text-[30px] mb-5">Banking with Surf?</div>
            <div className="grid sm:grid-cols-2 grid-row-2 gap-5">
                <div className="text-[#F7C59F] text-[20px] leading-[1.5]">
                    Unveil a banking experience that’s as easy as surfing. Say 'goodbye' to physical boundaries, and 'hello' to the world of instant payments. Make your payments quick, stable, and hassle-free with SurfCash, wherever you are in this vast ocean we call home.
                </div>
                <div className="text-[#F7C59F] text-[20px] leading-[1.5]">
                    SurfCash also offers its own prepaid credit card, so you can ride the waves of your financial journey with ease. You‘re never too far from your money with SurfCash, making it the coolest, most dependable banking buddy in the world of finance.
                </div>
            </div>
        </div>
    </div>
  );
};

export default Banking;
