import { createSlice } from "@reduxjs/toolkit";

export const filters = {
  ALL: "ALL",
  A: "A",
  TB: "TB",
  TM: "TM",
};

const mapSlice = createSlice({
  name: "map",
  initialState: {
    routes: [],
    filteredRoutes: [],
  },
  reducers: {
    setRoutes: (state, action) => {
      state.routes = action.payload;
    },
    setFilteredRoutes: (state, action) => {
      state.filteredRoutes = action.payload;
    },
    filterByTransportType(state, action) {
      const filteredRoutes = state.routes.filter(
        (route) => route.transportType === action.payload
      );

      return {
        ...state,
        filteredRoutes:
          action.payload && action.payload !== "ALL"
            ? filteredRoutes
            : [...state.routes],
      };
    },
    // Some error handling could also be done here:
    // setError: (state) => {...},
  },
});

export const mapActions = mapSlice.actions;
export default mapSlice;
