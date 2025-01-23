import commonAPI from "./commonApi";
import SERVERURL from "./serverUrl";

// admin Login
export const adminLoginAPI = async (reqBody) => {
    return await commonAPI("POST", `${SERVERURL}/admin/admin-login`, reqBody);
};
// Add doctor by admin
export const addDoctorAPI = async (reqBody) => {
    try {
        const response = await commonAPI("POST", `${SERVERURL}/admin/add-doctor`, reqBody);
        return response;
    } catch (error) {
        console.error("Error adding doctor:", error);
        throw error;
    }
};

// get all doctor
export const getDoctorAPI = async()=>{
    return await commonAPI ("GET",`${SERVERURL}/admin/get-doctor`,"")
}

// update doctor availability
export const updateAvailabilityAPI = async (doctorId) => {
    return await commonAPI("POST", `${SERVERURL}/admin/update-availability`, { doctorId });
  };




