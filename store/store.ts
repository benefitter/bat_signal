import { configureStore, combineReducers } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import documentReducer from './slices/documentSlice';
import groupReducer from './slices/groupSlice';

const persistConfig = { key: 'root', storage: AsyncStorage };

// Wrap each slice reducer with persistReducer
const persistedDocumentReducer = persistReducer(persistConfig, documentReducer);
const persistedGroupReducer = persistReducer(persistConfig, groupReducer);

const rootReducer = combineReducers({
  document: persistedDocumentReducer,
  group: persistedGroupReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production',
});

const persistor = persistStore(store);

type RootState = ReturnType<typeof rootReducer>;
export { store, persistor, RootState };
