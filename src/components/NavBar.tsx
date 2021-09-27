import React from 'react'
import Link from 'next/link'
import SideBar from './SideBar'
import { motion } from 'framer-motion'
import { AiOutlineMenuUnfold, AiOutlineSearch, AiOutlineMail, AiOutlineSetting } from 'react-icons/ai'

const NavBar: React.FC = () => {

  const [menuIsOpen, setMenuIsOpen] = React.useState(false)

  return (
    <React.Fragment>
      <div className="relative flex flex-row items-center justify-between w-full border-b border-gray-700 border-opacity-10">
        <div className="flex items-center justify-start w-full max-w-xs">
          <button 
            className="px-3 py-3 text-xl border-r border-gray-700 border-opacity-10 transition ease-in-out duration-200 hover:scale-95"
            type="button"
            onClick={() => setMenuIsOpen(true)}
          >
            <AiOutlineMenuUnfold />
          </button>
          <Link href="/">
            <a className="font-light text-xs px-3 py-3 border-r border-gray-700 border-opacity-10">SERVICES</a>
          </Link>
        </div>
        <div className="flex items-center justify-center w-full max-w-full">
          <Link href="/">
            <a className="font-extrabold text-xl tracking-widest">SEOTECH</a>
          </Link>
        </div>
        <div className="flex items-center justify-end w-full max-w-xs">
          <button type="button" className="text-xl px-3 py-3 border-l border-gray-700 border-opacity-10 transition ease-in-out duration-200 hover:scale-95">
            <AiOutlineSearch />
          </button>
          <button type="button" className="text-xl px-3 py-3 border-l border-gray-700 border-opacity-10 transition ease-in-out duration-200 hover:scale-95">
            <AiOutlineMail />
          </button>
          <button type="button" className="text-xl px-3 py-3 border-l border-gray-700 border-opacity-10 transition ease-in-out duration-200 hover:scale-95">
            <AiOutlineSetting />
          </button>
        </div>
      </div>
      <SideBar
        menuIsOpen={menuIsOpen}
        setMenuIsOpen={setMenuIsOpen}
      />
    </React.Fragment>
  )
}

export default NavBar