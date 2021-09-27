import React from 'react'
import NavBar from '~/components/NavBar'
import Footer from '~/components/Footer'

interface IProps {
  children: any
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <div className="font-montserrat flex flex-col w-full h-screen overflow-y-hidden cursor-default">
      <NavBar />
      <div className="relative flex flex-col w-full h-full overflow-y-auto">
        <div className="flex flex-col w-full h-full">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout