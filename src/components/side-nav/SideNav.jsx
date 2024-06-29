import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const SideNav = () => {

    const [email, setEmail] = useState("frank");

  return (
    <div className='bg-[#19201D] scrollbar w-[22%] h-[100vh] top-0 fixed overflow-y-auto py-5 overflow-x-hidden'>
        <div className='pl-5 pb-5'>
            <img src="./images/logo-white.svg" alt="" />
        </div>
        <div className="px-[32px] my-10 text-white">
        <p className="text-[12px] text-[#6F7975] mb-2">MAIN MENU</p>
        <Link to='/dashboard' className={ location.pathname === '/dashboard' ? `flex items-center justify-between py-[10px] text-[#25751E]` :`flex items-center justify-between py-[10px]`}>
            <div className="flex items-center">
            <img src="./images/dashboard-active.svg" className="mr-[15.67px]"/>
            <p className="">Dashboard</p>
            </div>
        </Link>
        <Link to='/manage-users' className={ location.pathname === '/manage-users' || location.pathname === '/create-user' || location.pathname.includes('user') || location.pathname.includes('profile-edit') ? `flex items-center justify-between py-[10px] text-[#25751E]` :`flex items-center justify-between py-[10px]`}>
            <div className="flex items-center">
                <img src="./images/manage-users-active.svg" className="mr-[15.67px]" alt="" />
                <p className="">Manage users</p>
            </div>
        </Link>
        </div>
        <div className="px-[32px] my-10 text-white">
        <p className="text-[12px] text-[#6F7975] mb-2">OTHERS</p>
        <Link to='/subscription' className={ location.pathname === '/subscription' || location.pathname === '/token' || location.pathname === '/sub-summary' || location.pathname === '/create-sub' || location.pathname.includes('send-token') ? `flex items-center justify-between py-[10px] text-[#25751E]` :`flex items-center justify-between py-[10px]`}>
            <div className="flex items-center">
            <img src="./images/wallet-active.svg" className="mr-[15.67px]"/>
            <p className="">Subscription</p>
            </div>
        </Link>
        <Link to='/monitor' className="flex items-center justify-between py-[10px]">
            <div className="flex items-center">
                <img src="./images/notification.svg" className="mr-[15.67px]" alt="" />
                <p className="">Income</p>
            </div>
        </Link>
        <Link to='/features' className={ location.pathname === '/features' ? `flex items-center justify-between py-[10px] text-[#25751E]` :`flex items-center justify-between py-[10px]`}>
            <div className="flex items-center">
                <img src="./images/notification.svg" className="mr-[15.67px]" alt="" />
                <p className="">Features</p>
            </div>
        </Link>
        <Link to='/settings' className={ location.pathname === '/settings' ? `flex items-center justify-between py-[10px] text-[#25751E]` :`flex items-center justify-between py-[10px]`}>
            <div className="flex items-center">
            <img src="./images/setting.svg" className='mr-[15.67px]' alt="" />
            <p className="">Settings</p>
            </div>
        </Link>
        </div>
        <div className="mx-[32px] mt-10">
        <Link
            to="/settings"
            style={{
                borderTop:'1px solid #444A47',
                borderBottom:'1px solid #444A47',
                padding: "0.8rem 0",
                marginBottom: 4,
                marginLeft: "0px",

            }}
            className="flex align-center hover"
            >
            <img src="/images/avatar.svg"className="w-[50px]" style={{ marginRight: 12, }} />
            <div>
                {email ? <p className="text-[12px] font-[600] text-white" style={{ whiteSpace: "nowrap" }}>{email}</p> : <p>No email found</p>}
                <p className="text-[#6F7975]">Admin</p>
            </div>
            </Link>
        </div>
    </div>
  )
}

export default SideNav