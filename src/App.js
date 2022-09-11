import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { getMapData } from "./store/map-actions";
import Main from "./components/Main/Main";
import Notification from "./components/UI/Notification";
import Sidebar from "./components/Sidebar/Sidebar";
import { useEffect } from "react";

export default function App() {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(getMapData());
  }, [dispatch]);

  return (
    <>
    {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
          visibility={notification.visibility}
        />
      )}
    <Sidebar/>
    <Main/>
    </>
  );
}
