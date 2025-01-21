import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext'
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
const {admToken,setAdmToken} = useContext(AdminContext)

const navigate = useNavigate()

const handleLogout = ()=>{
  navigate('/')
  admToken && setAdmToken('')
  admToken && localStorage.removeItem('admToken')
}

  return (
    <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white'>
        <div className="flex items-center gap-2 text-xs">
            <img className='w-36 sm:w-40 cursor-pointer' src={assets.admin_logo} alt="" />
            <p className='border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600'>{admToken?'Admin':'Doctor'}</p>
        </div>
        <button onClick={handleLogout} className="bg-primary text-white text-sm px-10 py-2 rounded-full">LogOut</button>
      
    </div>
  )
}

export default Navbar
