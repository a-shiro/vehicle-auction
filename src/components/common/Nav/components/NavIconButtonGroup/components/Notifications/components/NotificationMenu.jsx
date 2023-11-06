// Hooks
import { useRef } from "react";
import useOutsideClick from "../../../hooks/useOutsideClick";
// Components
import NotificationList from "./components/NotificationsList";
// CSS
import styles from "./NotificationsMenu.module.css";

function NotificationMenu({ toggleMenu }) {
  const menuRef = useRef();

  useOutsideClick(menuRef, toggleMenu, "notificationsMenu");

  return (
    <div ref={menuRef} className={styles.menu}>
      <header className={styles.menuHeader}>
        <h1>Notifications</h1>
        <button onClick={toggleMenu}>×</button>
      </header>

      <NotificationList />
    </div>
  );
}

export default NotificationMenu;
