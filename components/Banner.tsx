import React from 'react';

const Banner = () => {
  return (
    <div className="relative p-30 flex-col items-center justify-center h-[400px] w-screen ">
      <div className="relative p-30 flex items-center justify-center h-[300px] w-screen ">
        <div className="absolute text-7xl text-light1 font-parisienne z-20">
          Rosallie De Guzman
        </div>
        <div className=" text-[300px] font-playfair text-white z-10">RD</div>
      </div>
      <div className=" text-2xl font-inter tracking-[1em] flex items-center justify-center text-light1 z-10">
        CONSULTANT
      </div>
    </div>
  );
};

export default Banner;
