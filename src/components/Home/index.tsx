import React from 'react'

import arrowIcon from '../../assets/img/arrow-up.svg'
import avatarIcon from '../../assets/img/avatar.png'

export function Home() {
  return (
    <>
      <div className="flex w-full flex-col items-center  px-6 lg:flex-row lg:px-20">
        <div className="mt-16 w-full lg:mt-10 lg:mr-12 lg:w-2/4">
          <h1 className="text-5xl font-bold leading-[63px] text-white lg:text-6xl">
            Build Your Awesome Platform
          </h1>
          <p className="mt-7 text-white text-opacity-70">
            Enver studio is a digital studio that offers several services such
            as UI/UX Design to developers, we will provide the best service for
            those of you who use our services.
          </p>
          <button className="mt-12 flex h-14 items-center gap-4 rounded-md bg-blue-500 px-14 transition-all hover:bg-opacity-70">
            <span className="text-base font-bold text-white">
              <a href="#services">Our Services</a>
            </span>
            <img src={arrowIcon} alt="arrow up icon" />
          </button>
        </div>

        <div className="mt-24 flex justify-center lg:mt-0">
          <img
            className="w-full max-w-md lg:max-w-5xl"
            src={avatarIcon}
            alt="picture of a men vesting a yellow shirt"
          />
        </div>
      </div>

      <div className="w-full px-6 lg:flex lg:flex-col lg:px-20">
        <div className=" lg:flex lg:flex-nowrap lg:items-center lg:justify-between">
          <h1 className="mt-36 mr-10 text-5xl font-bold leading-[63px] text-white lg:w-[500px] lg:text-6xl">
            Why Enver Is The Best Choice?
          </h1>
          <p className="mt-7 text-white text-opacity-70 lg:mt-0 lg:h-[70px] lg:w-[500px] lg:pt-6">
            Watch this one minute video so you understand why you should use our
            services!
          </p>
        </div>
        <iframe
          className="mt-12 w-full"
          height="670"
          src="https://www.youtube.com/embed/4YyP1ICWDPc"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          allowFullScreen
        ></iframe>
      </div>
    </>
  )
}
