// src/redux/imageSlice.js
import {createSlice} from '@reduxjs/toolkit';

const imageSlice = createSlice({
  name: 'images',
  initialState: {selectedImages: []},
  reducers: {
    addImage: (state, action) => {
      state.selectedImages = action.payload;
    },
    removeImage: (state, action) => {
      state.selectedImages = state.selectedImages.filter(
        image => image !== action.payload,
      );
    },
  },
});

export const {addImage, removeImage} = imageSlice.actions;
export default imageSlice.reducer;
