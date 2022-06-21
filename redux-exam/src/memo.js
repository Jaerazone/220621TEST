import { configureStore, createSlice } from "@reduxjs/toolkit";

const memo = createSlice({
  name: "memo",
  initialState: {
    memo: [
      {
        id: 0,
        title: "제목임",
        content: "내용임",
      },
      {
        id: 1,
        title: "제목임2",
        content: "내용임2",
      },
    ],
  },

  reducers: {
    addMemo: (state, action) => {
      const newMemo = action.payload;
      state.memo.push({
        id: newMemo.id,
        title: newMemo.title,
        content: newMemo.content,
      });
    },
    removeMemo: (state, action) => {
      state.memo = state.memo.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addMemo, removeMemo } = memo.actions;

export default configureStore({
  reducer: {
    memo: memo.reducer,
  },
});
