import { useDispatch, useSelector } from "react-redux";
import { getMapData } from "../../store/map-actions";
import Main from "../Main/Main";
import Header from "../Header/Header";
import Notification from "../UI/Notification";
import { useEffect } from "react";
import {StyledContainer} from './App.styled'

export default function App() {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(getMapData());
  }, [dispatch]);

  return (
      <StyledContainer>
        <Header />
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
  );
}
