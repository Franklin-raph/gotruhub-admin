import React, { useEffect, useState } from 'react'
import BtnLoader from '../../components/btn-loader/Btnloader'
import SideNav from '../../components/side-nav/SideNav'
import TopNav from '../../components/top-nav/TopNav'
import Cookies from 'js-cookie'

const CreateSub = () => {

    const [loading, setLoading] = useState(false)
    const [planName, setPlanName] = useState('')
    const [duration, setDuration] = useState('')
    const [planValidity, setPlanValidity] = useState('')
    const [amount, setAmount] = useState()
    const [description, setDescription] = useState('')
    const [allFeatures, setAllFeatures] = useState([])
    const [selectedFeatures, setSelectedFeatures] = useState([])
    const [features, setFeatures] = useState([])

    useEffect(() => {
        getAllFeatures()
    }, [])

    const getAllFeatures = async () => {
        const res = await fetch('https://test.yamltech.com/features',{
            headers:{
                'Authorization': `Bearer ${Cookies.get('token')}`,
            }
        })
        const data = await res.json()
        setAllFeatures(data.data)
        console.log(data);
    }

          // Handler for the dropdown change event
  const handleSelectChange = (event) => {
    const selectedId = event.target.value;
    if (!features.includes(selectedId)) {
        setFeatures([...features, selectedId]);
    }
  };


    async function createSubPlan(e){
        e.preventDefault()
        const res = await fetch('https://test.yamltech.com/subscriptions',{
            headers:{
                'Authorization': `Bearer ${Cookies.get('token')}`,
                'Content-Type': 'application/json',
            },
            method:"POST",
            body: JSON.stringify({ name: planName, duration, planValidity, amount, description, features }),
        })
        const data = await res.json()
        console.log(data);
        if(res.ok) alert(data.message)
    }

  return (
    <div>
        <>
            <SideNav />
            <div className="w-[78%] ml-auto h-[100dvh]">
                <TopNav />
                <div className="px-[30px] py-[1rem]">
                    <div className="flex items-center justify-between mb-[3rem]">
                        <div>
                            <p className="text-[28px] text-primary-color font-[600]">Create Plan</p>
                        </div>
                        <div className="flex items-center gap-3">
                        </div>
                    </div>
                </div>
                <form onSubmit={createSubPlan} className="max-w-xl mx-auto p-4">
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Plan name</label>
                        <input
                            onChange={e => setPlanName(e.target.value)}
                            type="text"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Feature(s)</label>
                        <select onChange={handleSelectChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <option>--Select Feature--</option>
                            {allFeatures?.map((feature, number) => (
                            <option key={feature._id} value={feature._id}>
                                {feature.name}
                            </option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-4 flex space-x-4">
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-700">Duration</label>
                            <select
                                onChange={e => setDuration(e.target.value)}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                                <option>--Select Duration--</option>
                                <option value="weekly">Weekly</option>
                                <option value="monthly">Monthly</option>
                                <option value="14-weeks">14 weeks</option>
                            </select>
                        </div>

                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-700">Plan validity</label>
                            <div className="flex space-x-2">
                                <input
                                    onChange={e => setPlanValidity(e.target.value)}
                                    type="number"
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mb-4 flex space-x-4 items-center">
                        <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700">Amount</label>
                        <input
                            onChange={e => setAmount(e.target.value)}
                            type="number"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        </div>
                        <div className="text-xl mt-6">₦</div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Description (120 characters)</label>
                        <textarea
                            onChange={e => setDescription(e.target.value)}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            maxLength={120}
                        />
                    </div>

                    <div className="flex justify-end">
                        {
                            loading?
                            <BtnLoader />
                            :
                            <button
                                type="submit"
                                className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                            Create plan
                            </button>
                        }
                    </div>
                </form>
            </div>
        </>
    </div>
  )
}

export default CreateSub