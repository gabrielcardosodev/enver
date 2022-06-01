import React from 'react'

import logoImg from '../../assets/img/logo.svg'

export function Footer() {
  return (
    <div className="mt-32 flex w-full flex-col items-center justify-center lg:mb-24 lg:mt-12 lg:flex-row lg:justify-around">
      <img src={logoImg} alt="logo icon" />
      <ul className="mt-10 flex flex-col items-center justify-center gap-10 text-center text-lg font-bold text-white lg:mt-0 lg:flex-row">
        <li className="transition-all hover:text-blue-500">
          <a href="/">Support</a>
        </li>

        <li className="transition-all hover:text-blue-500">
          <a href="/">Privacy Policy</a>
        </li>

        <li className="transition-all hover:text-blue-500">
          <a href="/">Terms and Conditions</a>
        </li>
      </ul>

      <p className="my-10 text-center text-white lg:my-0">
        © 2020 Enver, All right reserved
      </p>
    </div>
  )
}
