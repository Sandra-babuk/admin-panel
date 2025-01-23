import React, { useEffect, useState } from 'react';
import { getDoctorAPI, updateAvailabilityAPI } from '../../services/allApi';

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

  const toggleAvailability = async (doctorId) => {
    try {
      await updateAvailabilityAPI(doctorId);
      setDoctors((prev) =>
        prev.map((doctor) =>
          doctor._id === doctorId ? { ...doctor, available: !doctor.available } : doctor
        )
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="m-5 w-full">
      <p className="mb-5 text-2xl font-bold text-center text-gray-800">Doctor List</p>
      <div className="bg-white shadow-lg px-8 py-8 border rounded-lg w-full max-w-4xl max-h-[80vh] overflow-y-scroll">
        <div className="flex flex-col gap-6">
          {doctors.length > 0 ? (
            doctors.map((doctor) => (
              <div key={doctor._id} className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col lg:flex-row gap-4 items-center">
                <div className="flex-shrink-0">
                  <img
                    className="w-32 h-32 rounded-full object-cover object-center"
                    src={doctor.image}
                    alt={`${doctor.name}`}
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="text-xl font-bold text-gray-900">{doctor.name}</p>
                      <p className="text-sm text-gray-600">{doctor.speciality}</p>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={doctor.available || false} // Ensure availability state is defined
                        onChange={() => toggleAvailability(doctor._id)}
                        className="h-5 w-5 text-green-500"
                      />
                      <span className="ml-2 text-sm text-gray-600">{doctor.available ? 'Available' : 'Not Available'}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600"><strong>Email:</strong> {doctor.email}</p>
                  <p className="text-sm text-gray-600"><strong>Speciality:</strong> {doctor.speciality}</p>
                  <p className="text-sm text-gray-600"><strong>Degree:</strong> {doctor.degree}</p>
                  <p className="text-sm text-gray-600"><strong>Experience:</strong> {doctor.experience}</p>
                  <p className="text-sm text-gray-600"><strong>Fees:</strong> {doctor.fees}</p>
                  <p className="text-sm text-gray-600"><strong>Address:</strong> {doctor.address}</p>
                  <p className="text-sm text-gray-600"><strong>About:</strong> {doctor.about}</p>
                  <button
                    className={`mt-4 px-4 py-2 rounded ${doctor.available ? 'bg-blue-500 text-white' : 'bg-gray-400 text-gray-800 cursor-not-allowed'}`}
                    disabled={!doctor.available}
                  >
                    {doctor.available ? 'Book Appointment' : 'Not Available'}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No doctors found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorsList;
