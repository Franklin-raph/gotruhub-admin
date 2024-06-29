import React from 'react'
import SideNav from '../../components/side-nav/SideNav'
import TopNav from '../../components/top-nav/TopNav'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

    const navigate = useNavigate()

  return (
    <div>
      <>
        <SideNav />
        <div className="w-[78%] ml-auto h-[100dvh]">
          <TopNav />
            <div className="bg-white">
              <div className="flex items-center justify-between mb-[1rem] px-[30px] py-[1rem] bg-[#F2FCF7]">
                <p className="text-[28px] text-primary-color font-[600]">Dashboard</p>
                <div className="flex items-center gap-3">
                  <button  className="bg-[#2D3934] text-white px-4 py-3 rounded-[8px] text-[14px]" onClick={() => navigate('/subscription')} >Subscription</button>
                  {/* <button className="">Create User</button> */}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-5 px-5 py-5 rounded-[12px]">
                <div className="bg-[#F7F7F7] p-3 rounded-[20px]">
                  <div className="flex items-center justify-between mb-5">
                    <p className="text-[#4F4F4F] font-[600]">Institutions</p>
                    <div className='bg-[#23AEAE] p-2 rounded-full'>
                      <img src="./images/buildings.svg" alt="" />
                    </div>
                  </div>
                  <p className="font-[600] text-text-color text-[24px]">250</p>
                  <div className="flex items-center mt-2">
                    <img src="./images/arrow-up.svg" alt="" />
                    <p className="text-[#25751E] text-[12px]">+15% this week</p>
                  </div>
                </div>

                <div className="bg-[#F7F7F7] p-3 rounded-[20px]">
                  <div className="flex items-center justify-between mb-5">
                    <p className="text-[#4F4F4F] font-[600]">Active subscription</p>
                    <div className='bg-[#23AEAE] p-2 rounded-full'>
                      <img src="./images/card-tick.svg" alt="" />
                    </div>
                  </div>
                  <p className="font-[600] text-text-color text-[24px]">250</p>
                  <div className="flex items-center mt-2">
                    <img src="./images/arrow-up.svg" alt="" />
                    <p className="text-[#25751E] text-[12px]">+15% this week</p>
                  </div>
                </div>

                <div className="bg-[#F7F7F7] p-3 rounded-[20px]">
                  <div className="flex items-center justify-between mb-5">
                    <p className="text-[#4F4F4F] font-[600]">Subscription revenue</p>
                    <div className='bg-[#23AEAE] p-2 rounded-full'>
                      <img src="./images/card-tick.svg" alt="" />
                    </div>
                  </div>
                  <p className="font-[600] text-text-color text-[24px]">#250,000,000</p>
                  <div className="flex items-center mt-2">
                    <img src="./images/arrow-up.svg" alt="" />
                    <p className="text-[#25751E] text-[12px]">+15% this week</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </>
      {/* {
        msg && <Alert msg={"Successfully Logged in"} setMsg={setMsg} alertType={'error'} />
      } */}
    </div>
  )
}

export default Dashboard