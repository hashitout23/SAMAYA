import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

function Hero() {
  const slides = [
    {
      url: 'https://www.digilocker.gov.in/assets/img/quiz_banner_mob.jpg',
    },
    {
      url: 'https://media.istockphoto.com/id/1679484568/vector/sad-woman-sitting-alone-in-a-paper-boat-depression-concept-illustration.jpg?s=2048x2048&w=is&k=20&c=8an70rp495nTHMA3PDtJ_0iKn2Ay9COS1Pp99HYcIRw=',
    },
    {
      url: 'https://media.istockphoto.com/id/1562044681/vector/solutions-business-direction-guidance-hiring-or-career-development-opportunities-paths-to.jpg?s=2048x2048&w=is&k=20&c=2PGsFsMb6H3VqRRu6oAaxOU3Ai-9qS_n41EEvYKF31Q=',
    },

    {
      url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
    },
    {
      url: 'https://wallpapercave.com/wp/wp10299394.png',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className='max-w-[1500px] h-[380px]  py-2 relative group m-2'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-white/50 text-black cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={50} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-white/50 text-black cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={50} />
      </div>
    </div>
  );
}

export default Hero;