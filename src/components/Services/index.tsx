import React from 'react'

import developmentIcon from '../../assets/img/development.svg'
import graphikIcon from '../../assets/img/graphik.svg'
import motionIcon from '../../assets/img/motion.svg'
import photographyIcon from '../../assets/img/photography.svg'
import uiIcon from '../../assets/img/ui.svg'
import videographyIcon from '../../assets/img/videography.svg'

export function Services() {
  return (
    <div id="services" className="w-full px-6 lg:flex lg:flex-col">
      <h1 className="mt-36 text-center text-5xl font-bold leading-[63px] text-white lg:text-6xl">
        The Service We Provide For You
      </h1>

      <div className="flex flex-col items-center justify-center lg:flex-row lg:flex-wrap">
        <div className="mt-24 flex w-[384px] flex-col items-center justify-center px-[38px]">
          <img src={developmentIcon} alt="code screen icon" />
          <h2 className="mt-5 text-center text-2xl font-semibold text-white">
            Development
          </h2>
          <p className="mt-5 text-center text-base text-white text-opacity-70">
            Create a platform with the best and coolest quality from us.
          </p>
        </div>

        <div className="mt-28 flex w-[384px] flex-col items-center justify-center px-[38px]">
          <img src={uiIcon} alt="user experience icon" />
          <h2 className="mt-5 text-center text-2xl font-semibold text-white">
            UI/UX Designer
          </h2>
          <p className="mt-5 text-center text-base text-white text-opacity-70">
            We provide UI/UX Design services, and of course with the best
            quality.
          </p>
        </div>

        <div className="mt-28 flex w-[384px] flex-col items-center justify-center px-[38px]">
          <img src={graphikIcon} alt="graphik icon" />
          <h2 className="mt-5 text-center text-2xl font-semibold text-white">
            Graphik Designer
          </h2>
          <p className="mt-5 text-center text-base text-white text-opacity-70">
            We provide Graphic Design services, with the best designers.
          </p>
        </div>

        <div className="mt-28 flex w-[384px] flex-col items-center justify-center px-[38px]">
          <img src={motionIcon} alt="motion icon" />
          <h2 className="mt-5 text-center text-2xl font-semibold text-white">
            Motion Graphik
          </h2>
          <p className="mt-5 text-center text-base text-white text-opacity-70">
            Create a platform with the best and coolest quality from us.
          </p>
        </div>

        <div className="mt-28 flex w-[384px] flex-col items-center justify-center px-[38px]">
          <img src={photographyIcon} alt="camera icon" />
          <h2 className="mt-5 text-center text-2xl font-semibold text-white">
            Photography
          </h2>
          <p className="mt-5 text-center text-base text-white text-opacity-70">
            We provide Photography services, and of course with the best
            quality.
          </p>
        </div>

        <div className="mt-28 flex w-[384px] flex-col items-center justify-center px-[38px]">
          <img src={videographyIcon} alt="video icon" />
          <h2 className="mt-5 text-center text-2xl font-semibold text-white">
            Videography
          </h2>
          <p className="mt-5 text-center text-base text-white text-opacity-70">
            Create a platform with the best and coolest quality from us.
          </p>
        </div>
      </div>
    </div>
  )
}
