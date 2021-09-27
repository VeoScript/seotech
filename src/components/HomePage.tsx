import React from 'react'
import Link from 'next/link'

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-2xl space-y-5">
      <div className="flex w-full">
        <h1 className="font-bold text-5xl">
          We make <br /> digital beautiful.
          <hr className="mt-5 border-b-2 border-blue-500 w-full max-w-[5rem]" />
        </h1>
      </div>
      <div className="flex w-full">
        <h6 className="font-normal text-sm">
          These are the words we live by in everything we do. Every story we tell,
          every brand we build, and every interaction we create must not only look beautiful but has to feel and function beautifully, too.
          Crafted to perfection.
        </h6>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex w-full">
          <h6 className="font-bold text-base text-gray-700">&gt; Search Engine Optimization</h6>
        </div>
        <div className="flex w-full">
          <h6 className="font-bold text-base text-gray-700">&gt; Bootstrap Latest Version</h6>
        </div>
        <div className="flex w-full">
          <h6 className="font-bold text-base text-gray-700">&gt; Tailwind CSS</h6>
        </div>
        <div className="flex w-full">
          <h6 className="font-bold text-base text-gray-700">&gt; Clean & Modern Designs</h6>
        </div>
        <div className="flex w-full">
          <h6 className="font-bold text-base text-gray-700">&gt; Responsive Web Designs</h6>
        </div>
        <div className="flex w-full">
          <h6 className="font-bold text-base text-gray-700">&gt; Google Fonts Used</h6>
        </div>
      </div>
      <div className="flex flex-col w-full space-y-3">
        <h6 className="font-normal text-sm">
          We create <span className="italic">Social Media</span>, <span className="italic">Web Application</span>, and <span className="italic">Desktop Application</span>. 
          Visit our <Link href="/"><a className="text-blue-500 hover:underline">portfolio</a></Link> to see our latest designs.
        </h6>
      </div>
    </div>
  )
}

export default HomePage