import React, { useEffect, useState } from 'react';
import { getDoctorAPI } from '../../services/allApi';

const DoctorsList = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetchDoctorList();
  }, []);

  const fetchDoctorList = async () => {
    try {
      const result = await getDoctorAPI();
      if (result.status === 200) {
        setDoctors(result.data);
      } else {
        console.log(result.response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="m-5 w-full">
      <p className="mb-3 text-lg font-medium">Doctor List</p>
      <div className="bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll">
        <div className="flex flex-col gap-6">
          {doctors.length > 0 ? (
            doctors.map((doctor) => (
              <div key={doctor._id} className="border-b py-4">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    className="w-24 h-24 rounded-full"
                    src={doctor.image}
                    alt={`${doctor.name}`}
                  />
                  <div>
                    <p className="font-medium text-lg">{doctor.name}</p>
                    <p className="text-gray-600">{doctor.speciality}</p>
                  </div>
                </div>
                <p><strong>Email:</strong> {doctor.email}</p>
                <p><strong>Experience:</strong> {doctor.experience}</p>
                <p><strong>Fees:</strong> {doctor.fees}</p>
                <p><strong>Address:</strong> {doctor.address}</p>
                <p><strong>About:</strong> {doctor.about}</p>
              </div>
            ))
          ) : (
            <p>No doctors found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorsList;
