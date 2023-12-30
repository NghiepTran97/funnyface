import React, { useState } from 'react'
import { Outlet } from 'react-router'
import SideBar from '../components/SideBar'
import '../css/Layout.css'
const LayoutUser = () => {
  const [width, setWidth] = useState('315px')
  
  const getWidthSideBar = (data) => {
    setWidth(data)
  }


  return (
    <>
      <div className="flex h-full min-h-screen bg-black body-main">
        <SideBar onRecive={getWidthSideBar} />
        <div
          style={{ marginLeft: width }}
          className="future-main flex flex-col w-full mx-8 w-full"
        >
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default LayoutUser
