// Hooks
import { useState } from "react";
// Components
import { ReactComponent as NotificationBell } from "../../../../../assets/svgs/notification-bell.svg";
import { ReactComponent as Search } from "../../../../../assets/svgs/search.svg";
import { ReactComponent as HamburgerMenu } from "../../../../../assets/svgs/hamburger-menu.svg";
// CSS
import styles from "./NavIconButtonGroup.module.css";

function NavIconButtonGroup() {
  const [hasUser, setHasUser] = useState(false);

  return (
    <ul className={styles.list}>
      {!hasUser && (
        <li>
          <button className={styles.signIn}>Sign In</button>
        </li>
      )}

      <li>
        <button className={styles.search}>
          <Search />
        </button>
      </li>

      {hasUser && (
        <li>
          <button className={styles.notifications}>
            <NotificationBell />
          </button>
        </li>
      )}

      <li>
        <button data-active-user={`${hasUser}`} className={styles.hamburger}>
          <HamburgerMenu />
        </button>
      </li>
    </ul>
  );
}

export default NavIconButtonGroup;
