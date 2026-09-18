
import axios from 'axios';

const BASE_URL = 'https://6a996fe553c0481726b94c42.mockapi.io/courses';

export const getCourses = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching courses:', error);
    throw error;
  }
};

export const addCourseApi = async (newCourse) => {
  try {
    const response = await axios.post(BASE_URL, newCourse);
    return response.data;
  } catch (error) {
    console.error('Error adding course:', error);
    throw error;
  }
};

export const updateCourseApi = async (id, updatedCourse) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, updatedCourse);
    return response.data;
  } catch (error) {
    console.error('Error updating course:', error);
    throw error;
  }
};

export const deleteCourseApi = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting course:', error);
    throw error;
  }
};