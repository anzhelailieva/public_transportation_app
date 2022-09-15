import AXIOS_CONFIG from "../firebase/instance";
import { uiActions } from "./ui-slice";
import { mapActions } from "./map-slice";

const axiosConfig = AXIOS_CONFIG;

export const getMapData = () => {
  return async (dispatch) => {
    const getData = async () => {
      const response = await axiosConfig.get().then((response) => response);

      if (!response) {
        throw new Error("Could not fetch data!");
      }
      const data = await response.data;
      return data;
    };

    try {
      const data = await getData();
      const routes = data.map((item) => item.routes);
      const segments = routes.map((route) =>
        route.map((item) => item.segments)
      );
      const stops = routes.map((route) => route.map((item) => item.stops));

      const segmentsCoordinates = segments.map((stop) =>
        stop.map((item) =>
          item.map((newItem) => newItem.coordinates.map((coo) => coo))
        )
      );
      const stopsCoordinates = stops.map((stop) =>
        stop.map((item) => item.map((newItem) => newItem))
      );
      dispatch(mapActions.setRoutes(routes.flat()));
      dispatch(mapActions.setSegments(segmentsCoordinates.flat(3)));
      dispatch(mapActions.setStops(stopsCoordinates.flat(3)));

    } catch (error) {
      console.log(error);
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching data failed!",
          visibility: true,
        })
      );
    }
  };
};
