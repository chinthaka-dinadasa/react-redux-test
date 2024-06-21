// src/features/post/postSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PostState {
  title: string;
  body: string;
  userId: number;
}

const initialState: PostState = {
  title: '',
  body: '',
  userId: 0,
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setBody: (state, action: PayloadAction<string>) => {
      state.body = action.payload;
    },
    setUserId: (state, action: PayloadAction<number>) => {
      state.userId = action.payload;
    },
    submitPost: (state) => {
      console.log('Post submitted', state);
      // Here you can handle the submission logic, e.g., API call
    },
  },
});

export const { setTitle, setBody, setUserId, submitPost } = postSlice.actions;

export default postSlice.reducer;
