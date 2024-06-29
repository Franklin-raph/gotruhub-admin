import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import BtnLoader from '../../components/btn-loader/Btnloader';

const Login = () => {

    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    async function login(e){
        e.preventDefault()
        setLoading(true)
        const response = await fetch('https://test.yamltech.com/sign-in/admin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
        const data = await response.json()
        if(response) setLoading(false)
        if(data.success){
            Cookies.set('token', data.data.access_token)
            localStorage.setItem('email', JSON.stringify(data.data.details.email))
            navigate('/dashboard')
        } else {
            alert(data.message)
        }
        setLoading(false)
    }

  return (
    <div className='flex flex-col items-center justify-center h-[100vh] w-[30%] mx-auto'>
      <p className='font-[600] mb-5 text-[20px]'>Gotruhub Admin Login</p>
      <form className='w-full text-left' onSubmit={login} >
        <div>
          <label className='block mb-2'>Email</label>
          <input 
              type='text'
              onChange={e => setEmail(e.target.value)}
              placeholder='johndoe@gmail.com'
              className="border rounded-[6px] outline-none w-full placeholder:text-[#B6B6B6] px-4 py-2"
          />
        </div>
        <div className='w-full mt-5'>
          <label className='block mb-2'>Password</label>
          <input 
              type='password'
              onChange={e => setPassword(e.target.value)}
              placeholder='****'
              className="border rounded-[6px] outline-none w-full placeholder:text-[#B6B6B6] px-4 py-2"
          />
        </div>
        {
          loading ?
          <BtnLoader />
          :
          <button type='submit' className='bg-primary-color w-full mt-7 py-2 rounded-[4px] text-white'>Login</button>
        }
      </form>
    </div>
  )
}

export default Login