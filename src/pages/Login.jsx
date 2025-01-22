import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { AdminContext } from '../context/AdminContext';
import { adminLoginAPI } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const [state, setState] = useState('Admin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setAdmToken, backendUrl } = useContext(AdminContext);
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (state === 'Admin') {
        const result = await adminLoginAPI({ email, password });
        localStorage.setItem('admToken', result.data.token);
        setAdmToken(result.data.token);
        console.log(result);
        toast.success('Login successful');
      } else {
        // Handle Doctor login (if needed)
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Invalid Credential');
    }
  };

 

  return (
    <>
      <form onSubmit={handleSubmit} className='min-h-[80vh] flex items-center'>
        <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg'>
          <p className='text-2xl font-semibold m-auto'><span className='text-primary'>{state}</span> Login</p>
          <div className='w-full'>
            <p>Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className='border border-[#DADADA] rounded w-full p-2 mt-1'
              type="email"
              required
            />
          </div>
          <div className='w-full'>
            <p>Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className='border border-[#DADADA] rounded w-full p-2 mt-1'
              type="password"
              required
            />
          </div>
          <button  className='bg-primary text-white w-full py-2 rounded-md text-base'>Login</button>
          {state === 'Admin' ? (
            <p>Doctor Login? <span className='text-primary underline cursor-pointer' onClick={() => setState('Doctor')}>Click here</span></p>
          ) : (
            <p>Admin Login? <span className='text-primary underline cursor-pointer' onClick={() => setState('Admin')}>Click here</span></p>
          )}
        </div>
      </form>
      <ToastContainer />

    </>
  );
};

export default Login;
