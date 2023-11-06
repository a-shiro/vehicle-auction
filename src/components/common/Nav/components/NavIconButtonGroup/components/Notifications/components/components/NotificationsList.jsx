// Hooks
import { useState } from "react";
// Components
import { Link } from "react-router-dom";
import { Fragment } from "react";
// CSS
import styles from "./NotificationList.module.css";

function NotificationList() {
  const [hasNotifications, setHasNotifications] = useState(true);

  // TODO: Fetch notifications from database and display them
  // TODO: Implement "mark as read" functionality

  return (
    <ul className={styles.list}>
      {!hasNotifications && (
        <li>
          <p className={styles.empty}>No notifications yet</p>
        </li>
      )}

      {hasNotifications && (
        <Fragment>
          <li>
            <Link className={styles.notification}>
              New comment <span>(1990 Land Rover Defender 110)</span>
            </Link>
          </li>
          <li>
            <Link className={styles.notification}>
              Answered question <span>(1990 Land Rover Defender 110)</span>
            </Link>
          </li>
          <li>
            <Link className={styles.notification}>
              Answered question <span>(1990 Land Rover Defender 110)</span>
            </Link>
          </li>
          <li>
            <Link className={styles.notification}>
              Answered question <span>(1990 Land Rover Defender 110)</span>
            </Link>
          </li>
        </Fragment>
      )}
    </ul>
  );
}

export default NotificationList;
