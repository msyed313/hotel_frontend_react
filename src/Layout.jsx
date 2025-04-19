import React from 'react'
import { Outlet } from 'react-router-dom'
import BGComponent from './Customer_dashboard/BGComponent'
import Footer from './Customer_dashboard/Footer'

function Layout() {
    return (
        <>
            <BGComponent />
            <Outlet />
            <Footer/>
        </>
    )
}

export default Layout