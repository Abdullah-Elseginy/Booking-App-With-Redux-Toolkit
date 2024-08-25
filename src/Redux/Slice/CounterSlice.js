import {createSlice, configureStore} from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
    BedroomsNo: 0,
    bathroomsNo: 0,
    GuestroomsNo: 0,
    Loungesrooms: 0,
  },
  reducers: {
    increment: state => {
      state.count += 1;
    },
    decrement: state => {
      state.count -= 1;
    },
    INCREMENT: (state, action) => {
      switch (action.payload) {
        case 'Bedrooms':
          state.BedroomsNo += 1;
          break;
        case 'Bathrooms':
          state.bathroomsNo += 1;
          break;
        case 'Guestrooms':
          state.GuestroomsNo += 1;
          break;
        case 'Loungesrooms':
          state.Loungesrooms += 1;
      }
    },
    DECREMENT: (state, action) => {
      switch (action.payload) {
        case 'Bedrooms':
          state.BedroomsNo -= 1;
          break;
        case 'Bathrooms':
          state.bathroomsNo -= 1;
          break;
        case 'Guestrooms':
          state.GuestroomsNo -= 1;
          break;
        case 'Loungesrooms':
          state.Loungesrooms -= 1;
      }
    },
  },
});

export const {increment, decrement, INCREMENT, DECREMENT} =
  counterSlice.actions;
export default counterSlice.reducer;
