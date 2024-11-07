//FILL HERE 3.2
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import roleJson from "../data/roles.json";

// interface Role{
//    role: "Unknown Personnel"| "Guest"| "Student"|"Developer"| "Executive Personnel"

// // }

const initialState = {
  role: "Unknown Personnel",
};
export const RoleSlice = createSlice({
  initialState,
  name: "RoleSlice",
  reducers: {
    setRole: (state, action: PayloadAction<number>) => {
      state.role = roleJson[action.payload];
    },
  },
});
export const {setRole}= RoleSlice.actions
export default RoleSlice.reducer