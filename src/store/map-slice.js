import { createSlice } from "@reduxjs/toolkit";

const mapSlice = createSlice({
  name: "map",
  initialState: {
    lines: [],
    routes: [],
    stops: [],
    segments: [],
  },
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setLines: (state, action) => {
      state.lines = action.payload;
    },
    setRoutes: (state, action) => {
        state.routes = action.payload;
      },
    setStops: (state, action) => {
      state.stops = action.payload;
    },
    setSegments: (state, action) => {
      state.segments = action.payload;
    },
    setError: (state) => {
      state.error = true;
    },
  },
});

export const mapActions = mapSlice.actions;
export default mapSlice;
