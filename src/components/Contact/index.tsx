import React from 'react'

export function Contact() {
  return (
    <div
      id="about"
      className="mt-36 h-[416px] w-full bg-[#1E1E20] px-6 lg:flex lg:items-center lg:justify-around"
    >
      <h1 className="mb-12 pt-20 text-4xl font-bold leading-[54px] text-white lg:w-[826px] lg:pl-10 lg:text-6xl">
        Contact us for the service you want to use
      </h1>
      <button className="mt-12 mb-20 flex h-14 items-center gap-4 rounded-md bg-blue-500 px-14 font-bold text-white transition-all hover:bg-opacity-70 lg:mb-0 lg:mt-0">
        Contact us
      </button>
    </div>
  )
}
