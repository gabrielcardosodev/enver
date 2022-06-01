import React, { useState } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { MdOutlineSort } from 'react-icons/md'

import logoImg from '../../assets/img/logo.svg'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex w-full items-center justify-between pt-10">
      <button className="pl-6 lg:ml-20 lg:overflow-hidden lg:pl-0">
        <a href="/">
          <img src={logoImg} alt="logo image" />
        </a>
      </button>

      <ul className="hidden gap-10 text-lg text-white lg:flex">
        <li className="transition-colors hover:text-blue-500">
          <a href="/">Home</a>
        </li>

        <li className="transition-colors hover:text-blue-500">
          <a href="#services">Services</a>
        </li>

        <li className="transition-colors hover:text-blue-500">
          <a href="#projects">Our Project</a>
        </li>

        <li className="transition-colors hover:text-blue-500">
          <a href="#about">About Us</a>
        </li>
      </ul>

      <button className="mr-6 hidden rounded-md border py-2 px-10 text-base text-white transition-all hover:border-blue-500 hover:text-blue-500 lg:block">
        <a href="/">Contact Us</a>
      </button>

      <button
        className="menu-button mr-6 ease-out lg:mr-40 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <IoCloseOutline className="h-7 w-7 text-white" />
        ) : (
          <MdOutlineSort className="h-7 w-7 text-white" />
        )}
      </button>

      {isOpen && (
        <div className="absolute top-20 mt-4 h-10 w-[90%] bg-blue-500 lg:hidden">
          <ul className="flex h-full w-full items-center justify-evenly gap-5 text-base text-white">
            <li className="transition-colors hover:bg-white hover:text-blue-500">
              <a href="/">Home</a>
            </li>

            <li className="transition-colors hover:bg-white hover:text-blue-500">
              <a href="#services">Services</a>
            </li>

            <li className="transition-colors hover:bg-white hover:text-blue-500">
              <a href="#project">Our Project</a>
            </li>

            <li className="transition-colors hover:bg-white hover:text-blue-500">
              <a href="#about">About Us</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
