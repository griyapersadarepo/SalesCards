import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import gzipMiddleware from '../features/util/gzipUtil';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: [gzipMiddleware]
});
