// Hooks
import { useState } from "react";
// CSS
import styles from "./HamburgerMenu.module.css";
import { Link } from "react-router-dom";

function HamburgerMenu({ toggleMenu }) {
  // TODO: Replace this with authentication system
  const [hasUser, setHasUser] = useState(true);
  //

  return (
    <div className={styles.menu}>
      <header className={styles.menuHeader}>
        <h1>Menu</h1>
        <button onClick={toggleMenu}>×</button>
      </header>

      <div className={styles.menuBody}>
        <ul className={styles.menuList}>
          {hasUser && (
            <>
              <li>
                <Link to="/account">Profile</Link>
              </li>
              <li>
                <Link to="/watch-list">Watch List</Link>
              </li>
              <li>
                <Link to="/account/listings">My Listings</Link>
              </li>
            </>
          )}

          <div>
            <li>
              <Link to="/">Live Auctions</Link>
            </li>
            <li>
              <Link to="/past-auctions">Past Results</Link>
            </li>
            <li>
              <Link to="about-us">What's Vroom Bids?</Link>
            </li>
            <li>
              <button>Daily Email</button>
            </li>
          </div>

          {hasUser && (
            <>
              <li>
                <Link to="/account/settings">Settings</Link>
              </li>
              <li>
                <button>Sign out</button>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default HamburgerMenu;
