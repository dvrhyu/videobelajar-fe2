import { createSlice } from '@reduxjs/toolkit';

const courseSlice = createSlice({
  name: 'courses',
  initialState: {
    items: [],
  },
  reducers: {
    setCourses: (state, action) => {
      state.items = action.payload;
    },
    addCourse: (state, action) => {
      state.items.push(action.payload);
    },
    updateCourse: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    deleteCourse: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { setCourses, addCourse, updateCourse, deleteCourse } = courseSlice.actions;
export default courseSlice.reducer;