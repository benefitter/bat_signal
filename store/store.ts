import { configureStore, combineReducers } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import documentReducer from './slices/documentSlice';
// import authReducer from './slices/authSlice';
// import findDocReducer from './slices/findDocSlice';
// import docRecommReducer from './slices/docRecommSlice';
// import myPlanReducer from './slices/myPlanSlice';

const persistConfig = { key: 'root', storage: AsyncStorage };

// Wrap each slice reducer with persistReducer
const persistedDocumentReducer = persistReducer(persistConfig, documentReducer);
// const persistedAuthReducer = persistReducer(persistConfig, authReducer);
// const persistedFindDocReducer = persistReducer(persistConfig, findDocReducer);
// const persistedDocRecommReducer = persistReducer(persistConfig, docRecommReducer);
// const persistedMyPlanReducer = persistReducer(persistConfig, myPlanReducer);

const rootReducer = combineReducers({
  document: persistedDocumentReducer,
  // auth: persistedAuthReducer,
  // findDoc: persistedFindDocReducer,
  // docRecomm: persistedDocRecommReducer,
  // myPlan: persistedMyPlanReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production',
});

const persistor = persistStore(store);

type RootState = ReturnType<typeof rootReducer>;
export { store, persistor, RootState };
