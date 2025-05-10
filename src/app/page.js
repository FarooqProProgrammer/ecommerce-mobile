import Image from 'next/image';
import React from 'react'

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <img src="/images/stylish.png" className="w-[280px] h-[80px] object-contain"  />
    </div>
  );
}

export default Home
