import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from './crypto/crypto';

const store = configureStore({
  reducer: {
    cryptoCurrency: cryptoReducer,
  },
});

export default store;
