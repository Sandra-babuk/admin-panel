import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import { addDoctorAPI } from '../../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddDoctor = () => {
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [experience, setExperience] = useState('');
  const [fees, setFees] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [degree, setDegree] = useState('');
  const [address, setAddress] = useState('');
  const [about, setAbout] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!name || !email || !password || !experience || !fees || !speciality || !degree || !address || !about || !image) {
      toast.error('Please fill all required fields.');
      return;
    }
  
    const reqBody = new FormData();
    reqBody.append('name', name);
    reqBody.append('email', email);
    reqBody.append('password', password);
    reqBody.append('experience', experience);
    reqBody.append('fees', fees);
    reqBody.append('speciality', speciality);
    reqBody.append('degree', degree);
    reqBody.append('address', address);
    reqBody.append('about', about);
    reqBody.append('image', image); // Ensure the file is appended here
  
    try {
      const result = await addDoctorAPI(reqBody);
      console.log(result);
      
  
      if (result?.status === 200) {
        toast.success('Doctor added successfully!');
      } else {
        toast.error(result?.message || 'Failed to add doctor.');
      }
    } catch (err) {
      toast.error('Something went wrong. Please try again later.');
      console.error('Error during API call:', err);
    }
  };
  

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit} className="m-5 w-full">
        <p className="mb-3 text-lg font-medium">Add Doctor</p>
        <div className="bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll">


          <div className="flex flex-col lg:flex-row items-start gap-10 text-gray-600">
            <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-1">
                <p>Image Url</p>
                <input
                  onChange={(e) => setImage(e.target.value)}
                  value={image}
                  className="border rounded px-3 py-2"
                  type="text"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <p>Doctor Name</p>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className="border rounded px-3 py-2"
                  type="text"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <p>Doctor Email</p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="border rounded px-3 py-2"
                  type="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <p>Doctor Password</p>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="border rounded px-3 py-2"
                  type="password"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <p>Experience</p>
                <select
                  onChange={(e) => setExperience(e.target.value)}
                  value={experience}
                  className="border rounded px-3 py-2"
                  required
                >
                  {[...Array(10).keys()].map((year) => (
                    <option key={year + 1} value={`${year + 1} Year`}>
                      {year + 1} Year
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <p>Fees</p>
                <input
                  onChange={(e) => setFees(e.target.value)}
                  value={fees}
                  className="border rounded px-3 py-2"
                  type="number"
                  placeholder="Fees"
                  required
                />
              </div>
            </div>
            <div className="w-full lg:flex-1 flex flex-col gap-4">
              <div className="flex-1 flex flex-col gap-1">
                <p>Speciality</p>
                <select
                  onChange={(e) => setSpeciality(e.target.value)}
                  value={speciality}
                  className="border rounded px-3 py-2"
                  required
                >
                  <option value="">Select Speciality</option>
                  <option value="General Physician">General Physician</option>
                  <option value="Gynecologist">Gynecologist</option>
                  <option value="Dermatologist">Dermatologist</option>
                  <option value="Pediatricians">Pediatricians</option>
                  <option value="Neurologist">Neurologist</option>
                  <option value="Gastroenterologist">Gastroenterologist</option>
                </select>
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <p>Education</p>
                <input
                  onChange={(e) => setDegree(e.target.value)}
                  value={degree}
                  className="border rounded px-3 py-2"
                  type="text"
                  placeholder="Education"
                  required
                />
              </div>

              <div className="flex-1 flex flex-col gap-1">
                <p>Address</p>
                <input
                  onChange={(e) => setAddress(e.target.value)}  // Update address here
                  value={address}
                  className="border rounded px-3 py-2"
                  type="text"
                  placeholder="Address"
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <p className="mt-4 mb-2">About Me</p>
            <textarea
              onChange={(e) => setAbout(e.target.value)}
              value={about}
              className="w-full px-4 pt-2 border rounded"
              placeholder="Write about yourself"
              required
            ></textarea>
          </div>

          <button type="submit" className="bg-primary px-10 py-3 mt-4 text-white rounded-full">
            Add Doctor
          </button>
        </div>
      </form>
    </>
  );
};

export default AddDoctor;
