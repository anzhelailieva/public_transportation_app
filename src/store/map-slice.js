import { createSlice } from "@reduxjs/toolkit";

const mapSlice = createSlice({
  name: "map",
  initialState: {
    routes: [],
    stops: [],
    segments: [],
  },
  reducers: {
    setRoutes: (state, action) => {
        state.routes = action.payload;
      },
    setStops: (state, action) => {
      state.stops = action.payload;
    },
    setSegments: (state, action) => {
      state.segments = action.payload;
    },
    // Some error handling could also be done here:
    // setError: (state) => {...},
  },
});

export const mapActions = mapSlice.actions;
export default mapSlice;
