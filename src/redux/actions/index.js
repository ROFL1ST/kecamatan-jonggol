import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  desa_id: undefined,
  status: undefined,
  route: "/",
};

export const beritaInfo = createSlice({
  name: "data",
  initialState: initialState,
  reducers: {
    changeState: (state, action) => {
      const data = action.payload;

      state.desa_id = data.desa_id;
      state.status = data.status;
      state.route = data.route;
    },
  },
});

export const { changeState, resetData } = beritaInfo.actions;
export default beritaInfo.reducer;
