import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';
import counterReducer from './counter';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export default store;

// const counterReducer = (state = initialState, action) => {
//   if (action.type === 'INCREMENT') {
//     return {
//       ...state,
//       counter: state.counter + 1,
//     };
//   }
//   if (action.type === 'INCREASE') {
//     return {
//       ...state,
//       counter: state.counter + action.value,
//     };
//   }
//   if (action.type === 'DECREMENT') {
//     return {
//       ...state,
//       counter: state.counter - 1,
//     };
//   }
//   if (action.type === 'TOGGLE_COUNTER') {
//     return {
//       ...state,
//       showCounter: !state.showCounter,
//     };
//   }
//   return state;
// };

// Configuring multiple reducers into one big reducer
// const store = configureStore({ reducer: { counter: counterSlice.reducer } });

// Configuring only one reducer
// const store = configureStore({ reducer: counterSlice.reducer });
