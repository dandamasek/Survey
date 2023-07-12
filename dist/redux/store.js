import { configureStore } from '@reduxjs/toolkit';
import surveyReducer from '../features/SurveySlice';
import userReducer from '../features/UserSlice';
import copyRenducer from '../features/CopySlice';
import groupReducer from '../features/GroupSlice';
export const store = configureStore({
  reducer: {
    surveys: surveyReducer,
    users: userReducer,
    copy: copyRenducer,
    groups: groupReducer
  }
});