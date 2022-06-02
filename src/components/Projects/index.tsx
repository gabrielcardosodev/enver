import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

import carrouselImg1 from '../../assets/img/carrousel-image-1.png'
import carrouselImg2 from '../../assets/img/carrousel-image-2.png'
import carrouselImg3 from '../../assets/img/carrousel-image-3.png'

export function Projects() {
  return (
    <>
      <div id="projects" className="flex w-full flex-col items-center px-6">
        <h1 className="mt-36 mb-12 text-5xl font-bold leading-[63px] text-white lg:text-6xl">
          Our Awesome Portfolio
        </h1>

        <div className="lg:flex lg:flex-nowrap lg:gap-5">
          <div className="flex max-w-[375px] justify-center rounded-md bg-[#1E1E20] p-4">
            <img
              className="w-full max-w-[327px]"
              src={carrouselImg1}
              alt="project one image"
            />
          </div>

          <div className="flex max-w-[375px] justify-center rounded-md bg-[#1E1E20] p-4">
            <img
              className="w-full max-w-[327px]"
              src={carrouselImg2}
              alt="project one image"
            />
          </div>

          <div className="flex max-w-[375px] justify-center rounded-md bg-[#1E1E20] p-4">
            <img
              className="w-full max-w-[327px]"
              src={carrouselImg3}
              alt="project one image"
            />
          </div>
        </div>

        <div className="mt-12 flex items-center justify-center gap-5">
          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white bg-opacity-20 text-white transition-all hover:bg-blue-500">
            <IoIosArrowBack size={21} />
          </button>

          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white bg-opacity-20 text-white transition-all hover:bg-blue-500">
            <IoIosArrowForward size={21} />
          </button>
        </div>
      </div>
    </>
  )
}
