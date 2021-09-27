import React from 'react'
import NavBar from '~/components/NavBar'

interface IProps {
  children: any
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <div className="font-montserrat flex flex-col w-full h-screen overflow-y-hidden">
      <NavBar />
      <div className="flex flex-col w-full h-full overflow-y-auto">
        {children}
      </div>
    </div>
  )
}

export default Layout