import React from 'react'
import Link from 'next/link'
import { ComponentTransition, AnimationTypes } from 'react-component-transition'
import { AiOutlineClose } from 'react-icons/ai'

interface IProps {
  menuIsOpen: any
  setMenuIsOpen: any
}

const SideBar: React.FC<IProps> = ({ menuIsOpen, setMenuIsOpen }) => {
  return (
    <ComponentTransition
      enterAnimation={AnimationTypes.fade.enter}
      exitAnimation={AnimationTypes.fade.exit}
    >
      {menuIsOpen && (
        <React.Fragment>
          <button onClick={() => {setMenuIsOpen(false)}} type="button" className={`${menuIsOpen ? 'z-10 block fixed inset-0 w-full h-full cursor-default focus:outline-none bg-gray-700 bg-opacity-50' : 'hidden'}`}></button>
          <div className="fixed inset-0 z-20 flex flex-col w-full max-w-xs h-full border-r border-gray-700 border-opacity-10 bg-white">
            <div className="flex flex-col w-full">
              <div className="flex items-center justify-between w-full px-3 py-3 border-b border-gray-700 border-opacity-10">
                <h5 className="font-bold text-base">Menu</h5>
                <button
                  type="button"
                  onClick={() => setMenuIsOpen(false)}
                >
                  <AiOutlineClose className="text-base transition ease-in-out duration-300 transform hover:rotate-6" />
                </button>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <Link href="/">
                <a className="flex items-center w-full p-5 font-normal text-sm uppercase border-b border-gray-700 border-opacity-10 hover:border-white hover:bg-gray-700 hover:bg-opacity-10">
                  Home
                </a>
              </Link>
              <Link href="/">
                <a className="flex items-center w-full p-5 font-normal text-sm uppercase border-b border-gray-700 border-opacity-10 hover:border-white hover:bg-gray-700 hover:bg-opacity-10">
                  Portfolio
                </a>
              </Link>
              <Link href="/">
                <a className="flex items-center w-full p-5 font-normal text-sm uppercase border-b border-gray-700 border-opacity-10 hover:border-white hover:bg-gray-700 hover:bg-opacity-10">
                  Blog
                </a>
              </Link>
              <Link href="/">
                <a className="flex items-center w-full p-5 font-normal text-sm uppercase border-b border-gray-700 border-opacity-10 hover:border-white hover:bg-gray-700 hover:bg-opacity-10">
                  About
                </a>
              </Link>
              <Link href="/">
                <a className="flex items-center w-full p-5 font-normal text-sm uppercase border-b border-gray-700 border-opacity-10 hover:border-white hover:bg-gray-700 hover:bg-opacity-10">
                  Contact
                </a>
              </Link>
            </div>
            <div className="absolute bottom-0 flex justify-center w-full p-3">
              <span className="font-normal text-[11px]">&copy; { new Date().getFullYear() }, SEOTECH, Ltd. All rights reserved.</span>
            </div>
          </div>
        </React.Fragment>
      )}
    </ComponentTransition>
  )
}

export default SideBar