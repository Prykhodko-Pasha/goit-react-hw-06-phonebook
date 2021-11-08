import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducer';

const store = configureStore({
  reducer: {
    contacts: reducers,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;

//======= vinilla redux =======
// import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import reducers from './reducer';

// const store = createStore({
//     contacts: reducers,
//   }, composeWithDevTools());

// export default store;
