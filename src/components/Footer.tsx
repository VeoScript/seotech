import React from 'react'
import Link from 'next/link'
import { FacebookIcon, TwitterIcon, InstagramIcon, TiktokIcon, YoutubeIcon } from '~/utils/Icons'

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col w-full px-10 py-5 text-white bg-[#1a1a1a]">
      <div className="flex flex-row justify-between w-full">
        <div className="flex flex-col w-full max-w-xs">
          <div className="flex flex-col">
            <h2 className="font-extrabold text-xl tracking-widest">SEOTECH</h2>
            <span className="font-light text-xs">
              SEO Technology from Bangladesh IT Digital Company
            </span>
            <div className="flex flex-row items-center mt-3 space-x-2">
              <Link href="/">
                <a target="_blank">
                  <FacebookIcon className="w-3.5 h-3.5 fill-current text-white" />
                </a>
              </Link>
              <Link href="/">
                <a target="_blank">
                  <TwitterIcon className="w-4 h-4 fill-current text-white" />
                </a>
              </Link>
              <Link href="/">
                <a target="_blank">
                  <InstagramIcon className="w-4 h-4 fill-current text-white" />
                </a>
              </Link>
              <Link href="/">
                <a target="_blank">
                  <TiktokIcon className="w-4 h-4 fill-current text-white" />
                </a>
              </Link>
              <Link href="/">
                <a target="_blank">
                  <YoutubeIcon className="w-4 h-4 fill-current text-white" />
                </a>
              </Link>
            </div>
            <div className="flex w-full pt-5">
              <span className="font-normal text-[11px]">&copy; { new Date().getFullYear() }, SEOTECH, Ltd. All rights reserved.</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full max-w-xs">
          <div className="flex flex-col items-center w-full space-y-5">
            <h1 className="font-normal text-xs">Do you want to be an author? Join to our blogs.</h1>
            <div className="flex flex-row items-center justify-center w-full">
              <Link href="/">
                <a className="w-full text-sm text-center p-3 rounded-md bg-[#2b70d8] transition ease-in-out duration-200 hover:bg-opacity-80">
                  Create Account
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-row space-x-10 w-full max-w-xs">
          <div className="flex flex-col">
            <h2 className="font-normal text-sm text-[#727272]">Our Team</h2>
            <div className="flex flex-col mt-3 space-y-1">
              <Link href="/">
                <a className="text-xs text-white hover:underline">About Us</a>
              </Link>
              <Link href="/">
                <a className="text-xs text-white hover:underline">Portfolio</a>
              </Link>
              <Link href="/">
                <a className="text-xs text-white hover:underline">Careers</a>
              </Link>
              <Link href="/">
                <a className="text-xs text-white hover:underline">Developers</a>
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="font-normal text-sm text-[#727272]">Support</h2>
            <div className="flex flex-col mt-3 space-y-1">
              <Link href="/">
                <a className="text-xs text-white hover:underline">Contact Us</a>
              </Link>
              <Link href="/">
                <a className="text-xs text-white hover:underline">FAQ</a>
              </Link>
              <Link href="/">
                <a className="text-xs text-white hover:underline">Technologies</a>
              </Link>
              <Link href="/">
                <a className="text-xs text-white hover:underline">Become A Sponsor</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer