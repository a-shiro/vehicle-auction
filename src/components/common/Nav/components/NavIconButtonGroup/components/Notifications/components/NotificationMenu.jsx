// Components
import NotificationList from "./components/NotificationsList";
// CSS
import styles from "./NotificationsMenu.module.css";

function NotificationMenu({ toggleMenu }) {
  return (
    <div className={styles.menu}>
      <header className={styles.menuHeader}>
        <h1>Notifications</h1>
        <button onClick={toggleMenu}>×</button>
      </header>

      <NotificationList />
    </div>
  );
}

export default NotificationMenu;
