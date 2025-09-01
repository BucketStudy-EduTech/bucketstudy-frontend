import axios from 'axios';

// The base URL for the backend API.
// NOTE: This URL has been corrected to match the @RequestMapping and port from your Spring Boot controller.
const BASE_URL = "http://localhost:9095/api/internships";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// GET all internships
export const getAllInternships = async () => {
  try {
    const response = await api.get('/getAllinternships');
    return response.data;
  } catch (error) {
    console.error("API call failed:", error);
    throw error;
  }
};

// GET a single internship by ID
export const getInternshipById = async (id) => {
  try {
    const response = await api.get(`/getInternshipById/${id}`);
    return response.data;
  } catch (error) {
    console.error("API call failed:", error);
    throw error;
  }
};

// POST a new internship (Admin function)
export const createInternship = async (internshipData) => {
  try {
    const response = await api.post('/createInternship', internshipData);
    return response.data;
  } catch (error) {
    console.error("API call failed:", error);
    throw error;
  }
};

// PUT update an existing internship (Admin function)
export const updateInternship = async (id, internshipData) => {
  try {
    const response = await api.put(`/updateInternship/${id}`, internshipData);
    return response.data;
  } catch (error) {
    console.error("API call failed:", error);
    throw error;
  }
};

// DELETE an internship (Admin function)
export const deleteInternship = async (id) => {
  try {
    await api.delete(`/deleteInternship/${id}`);
  } catch (error) {
    console.error("API call failed:", error);
    throw error;
  }
};

// New endpoint for student registration (simulated)
export const applyForInternship = async (internshipId, userId) => {
  // The provided backend code does not have this endpoint, so we will
  // assume it exists and returns the new enrollment data.
  console.log(`Simulating application for internship ID: ${internshipId} by user: ${userId}`);
  return {
    id: 'enrolled-123',
    title: "Web Development",
    company: "BucketStudy",
    duration: 1,
    requirements: ["Complete HTML/CSS mini-project", "Build a React component", "Submit daily progress reports"],
    status: "In-Progress",
  };
};
