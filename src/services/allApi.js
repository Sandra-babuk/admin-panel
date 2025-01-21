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



