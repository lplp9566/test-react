import { createSlice,PayloadAction } from "@reduxjs/toolkit";

export interface FloorReducer {
    status: boolean
}

const initialState: boolean[] = [false, false, false, false, false];

 export const floorsSlice = createSlice({
    initialState,
    name: "floors",
    reducers: {
      changeAccess: (state, action: PayloadAction<number>) => {
        state[action.payload] = !state[action.payload];
      },
    },
  });

export const { changeAccess } = floorsSlice.actions;
export default floorsSlice.reducer;



