import AXIOS_CONFIG from "../firebase/instance";
import { uiActions } from "./ui-slice";

const axiosConfig = AXIOS_CONFIG;

export const getMapData = () => {
  return async (dispatch) => {
    const getData = async () => {
      const response = await axiosConfig.get();

      if (!response) {
        throw new Error("Could not fetch data!");
      }

      const data = await response.data;

      return data;
    };

    try {
      await getData();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Fetching data successfully!",
          visibility: true,
        })
      );
    } catch (error) {
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
