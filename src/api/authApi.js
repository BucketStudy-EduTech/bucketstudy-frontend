// src/api/authApi.js

import axios from "axios";

const API_BASE_URL = "http://localhost:9095/api/auth";

export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/register`, userData);
        return response.data;
    } catch (error) {
        console.error("Register failed:", error);
        throw error;
    }
};

export const loginUser = async (credentials) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/login`, credentials);
        // The backend now returns name, role, and userId
        const { token, name, role, userId } = response.data;
        
        // Save all necessary details to local storage
        localStorage.setItem("token", token);
        localStorage.setItem("name", name);
        localStorage.setItem("role", role);
        localStorage.setItem("userId", userId);

        return { token, name, role, userId };
    } catch (error) {
        console.error("Login failed:", error);
        throw error;
    }
};

export const logoutUser = () => {
    localStorage.clear();
};

export const getUserFromLocalStorage = () => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    const name = localStorage.getItem("name");
    const userId = localStorage.getItem("userId");

    if (token && role && name && userId) {
        return { token, role, name, userId };
    }
    return null;
};



export const getUserFromToken = () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) return null;
    const payload = JSON.parse(atob(token.split(".")[1])); // decode JWT
    return { email: payload.sub, role: payload.role, uid: payload.uid };
  } catch {
    return null;
  }
};