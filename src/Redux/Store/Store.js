import {combineReducers, configureStore} from '@reduxjs/toolkit';
import CounterSlice from '../Slice/CounterSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from 'redux-persist';
import OptionsSlice from '../Slice/OptionsSlice';
import ImageSlice from '../Slice/ImageSlice';

// export const store = configureStore({
//   reducer: {
//     counter: CounterSlice,
//   },
// });

// Set up redux-persist configuration
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

// Combine your reducers directly in the store file
const rootReducer = combineReducers({
  counter: CounterSlice,
  options: OptionsSlice,
  images: ImageSlice,
});

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create and configure the store
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Persistor
export const persistor = persistStore(store);

export default store;
