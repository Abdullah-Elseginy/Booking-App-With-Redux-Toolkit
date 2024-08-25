import {createSlice, configureStore} from '@reduxjs/toolkit';

const optionSlice = createSlice({
  name: 'options',
  initialState: {
    furnished: true,
    kitchen: true,
    parking: true,
    ACType: 'split',
  },
  reducers: {
    ChoiceOption: (state, action) => {
      switch (action.payload) {
        case 'furnished':
          state.furnished = !state.furnished;
          break;
        case 'kitchen':
          state.kitchen = !state.kitchen;
          break;
        case 'parking':
          state.parking = !state.parking;
      }
    },
    ACTypeOption: (state, action) => {
      switch (action.payload) {
        case 'window':
          state.ACType = 'window';
          break;
        case 'split':
          state.ACType = 'split';
          break;
        case 'central':
          state.ACType = 'central';
          break;
        case 'notInstalled':
          state.ACType = 'notInstalled';
      }
    },
  },
});

export const {ChoiceOption, ACTypeOption} = optionSlice.actions;
export default optionSlice.reducer;
