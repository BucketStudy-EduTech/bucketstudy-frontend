import axios from "axios";

const API_BASE_URL = "http://localhost:9095/api/courses";

// Function to get all courses
export const getAllCourses = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/getAllCourses`);
    return response.data;
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw error; // Propagate the error to the component
  }
};

// Function to create a new course
export const createCourse = async (course) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/addCourse`, course);
    return response.data;
  } catch (error) {
    console.error("Error creating course:", error);
    throw error;
  }
};

// Function to update an existing course

export const updateCourse = async (id, course) => {
  try {
    // The ID is a String
    const response = await axios.put(`${API_BASE_URL}/updateCourse/${id}`, course);
    return response.data;
  } catch (error) {
    console.error("Error updating course:", error);
    throw error;
  }
};

// Function to delete a course
export const deleteCourse = async (id) => {
  try {
    // The ID is a String
    await axios.delete(`${API_BASE_URL}/deleteCourse/${id}`);
  } catch (error) {
    console.error("Error deleting course:", error);
    throw error;
  }
};

// Add other API calls as needed, e.g., getCourseById, getCoursesByInstructor, etc.