import axios from "axios";

const api = axios.create({
  baseURL: "https://mern-back-1jic.onrender.com",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const login = async (data) => {
  try {
    const res = await api.post("/api/login", data); 
    return res;
  } catch (error) {
    console.error("Error during login:", error.response.data.message);
    return error;
  }
};
export const signup = async (data) => {
    try {
      const response = await api.post("/api/register", data);
      return response;
    } catch (error) {
      console.error("Signup Error:", error.response); // Log the detailed error response
      return error;
    }
  };
  export const getAllOppitments = async () => {
    let response;
  
    try {
      response = await api.get("/api/get-appointments");
    } catch (error) {}
  
    return response;
  };
  export const addProfiledata = async (data) => {
    let response;
  
    try {
      response = await api.post("/api/addprofile" , data);
    } catch (error) {
        console.error("book-appointment Error:", error.response);
        return error;
    }
  
    return response;
  };
  
  export const submitOppitments = async (data) => {
    try {
        const response = await api.post("/api/book-appointment", data);
        return response;
      } catch (error) {
        console.error("book-appointment Error:", error.response); // Log the detailed error response
        return error;
      }
  };
  
export const signout = async () => {
    let response;
    try {
      response = await api.post("/api/logout");
    } catch (error) {
      return error;
    }
  
    return response;
  };


  api.interceptors.response.use(
    (config) => config,
    async (error) => {
      const originalReq = error.config;
  
      // extract the value of message from json response if it exists
      const errorMessage = error.response && error.response.data && error.response.data.message;
  
      if (
        errorMessage === 'Unauthorized' &&
        (error.response.status === 401 || error.response.status === 500) &&
        originalReq &&
        !originalReq._isRetry
      ) {
        originalReq._isRetry = true;
  
        try {
          await axios.get(`https://mern-back-1jic.onrender.com/api/refresh`, {
            withCredentials: true,
          });
  
          return api.request(originalReq);
        } catch (error) {
          return error;
        }
      }
      throw error;
    }
  );