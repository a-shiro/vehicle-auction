// Hooks
import { useState } from "react";
// Components
import { Fragment } from "react";
import { ReactComponent as NotificationIcon } from "../../../../../../../assets/svgs/notification-bell.svg";
import NotificationMenu from "./components/NotificationMenu";
// CSS
import styles from "./Notifications.module.css";

// FIXME: Switching from portrait to landscae on mobile enlarges the anchor tag font size (only when menu is active)

function Notifications() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    // TODO: Disable body scrolling on open
    setIsMenuActive(!isMenuActive);
  };

  return (
    <Fragment>
      {/* TODO: Add notification bubble to indicate amount that user has */}
      <button
        data-link-key="notificationsMenu"
        onClick={toggleMenu}
        className={styles.notificationsBtn}
      >
        <NotificationIcon />
      </button>

      {isMenuActive && <NotificationMenu toggleMenu={toggleMenu} />}
    </Fragment>
  );
}

export default Notifications;
