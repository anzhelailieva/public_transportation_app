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
      dispatch(mapActions.setRoutes(routes.flat()));
      dispatch(mapActions.setFilteredRoutes(routes.flat()))

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
