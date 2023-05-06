import React from 'react'
import TypingText from '@/components/kayanyazi/page'

const HomePage = () => {
  return (
    <div className="container mx-auto max-w-4xl px-4 mt-44">
      <div className="flex">
        <div className="w-1/3 -mt-28">
          <img src="/ppp.png" alt="Your Name" className="w-full h-auto float-animation" />
        </div>
        <div className="w-2/3 ml-28 -mt-10">
          <h1 className="text-3xl font-semibold">
            Hello, my name is <span className="text-black underline">Salim</span>{' '}
          </h1>
          <div className="my-10"></div> {/* boş bir div ekleyin */}
          <span className="text-gray-600 text-2xl ml-6">
            I am a <TypingText text={['Software Developer', 'Web Designer', 'Frontend Developer', 'Web Developer']} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
