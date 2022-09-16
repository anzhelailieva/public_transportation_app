import classes from "./Notification.module.css";
import { uiActions } from "../../store/ui-slice";
import { useDispatch } from "react-redux";

export default function Notification(props) {
  const dispatch = useDispatch();
  let specialClasses = "";

  if (props.status === "error") {
    specialClasses = classes.error;
  }
  if (props.status === "success") {
    specialClasses = classes.success;
  }

  const hideNotificationBar = () => {
    dispatch(uiActions.hideNotification());
  };

  const cssClasses = `${classes.notification} ${specialClasses}`;

  return (
    <section className={cssClasses}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
      <button onClick={hideNotificationBar}>X</button>
    </section>
  );
}
