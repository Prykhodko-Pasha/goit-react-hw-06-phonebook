import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducers from './reducer';

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

export const store = configureStore({
  reducer: {
    contacts: persistReducer(persistConfig, reducers),
  },
  // official fix of non-serializable data ===
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }), // ===================================
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

// export default { store, persistor };

//======= vinilla redux =======
// import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import reducers from './reducer';

// const store = createStore({
//     contacts: reducers,
//   }, composeWithDevTools());

// export default store;
