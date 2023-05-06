import React from 'react';
import Link from 'next/link';

const Reactt = () => {
  return (
    <div className='container mx-auto max-w-screen-md px-4 py-10'>
      <div className='grid grid-cols-3 gap-6'>
        <Link href="/projects/reactt/box1" className='w-full h-20 md:h-64 p-2 md:p-4 border border-gray-300 hover:border-gray-400 hover:bg-gray-100 cursor-pointer flex justify-center items-center'>
          Box 1
        </Link>
        <Link href="/projects/reactt/box2" className='w-full h-20 md:h-64 p-2 md:p-4 border border-gray-300 hover:border-gray-400 hover:bg-gray-100 cursor-pointer flex justify-center items-center'>
          Box 2
        </Link>
        <Link href="/projects/reactt/box3" className='w-full h-20 md:h-64 p-2 md:p-4 border border-gray-300 hover:border-gray-400 hover:bg-gray-100 cursor-pointer flex justify-center items-center'>
          Box 3
        </Link>
      </div>
    </div>
  );
};

export default Reactt;
