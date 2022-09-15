import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { getMapData } from "./store/map-actions";
import Main from "./components/Main/Main";
import Notification from "./components/UI/Notification";
import Navbar from "./components/Navbar/Navbar";
import { useEffect } from "react";
import { StyledContainer } from "./components/Main/Main.style";

export default function App() {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(getMapData());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <StyledContainer>
        {notification && (
          <Notification
            status={notification.status}
            title={notification.title}
            message={notification.message}
            visibility={notification.visibility}
          />
        )}
        <Main />
      </StyledContainer>
    </>
  );
}
