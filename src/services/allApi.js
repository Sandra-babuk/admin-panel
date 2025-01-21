import commonAPI from "./commonApi";
import SERVERURL from "./serverUrl";

// admin Login
export const adminLoginAPI = async (reqBody) => {
    return await commonAPI("POST", `${SERVERURL}/admin/admin-login`, reqBody);
};
// add doctor by admin
export const addDoctorAPI = async (formData,reqHeader)=>{
    return await commonAPI("POST",`${SERVERURL}/admin/add-doctor`,formData,reqHeader)
}
