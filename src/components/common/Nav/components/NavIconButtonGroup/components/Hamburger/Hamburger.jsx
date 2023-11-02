// Hooks
import { useState } from "react";
// Components
import { ReactComponent as HamburgerIcon } from "../../../../../../../assets/svgs/hamburger-menu.svg";
// CSS
import styles from "./Hamburger.module.css";
import HamburgerMenu from "./components/HamburgerMenu";

// FIXME: Switching from portrait to landscae on mobile enlarges the anchor tag font size (only when menu is active)

function Hamburger() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  // TODO: Replace this with authentication system
  const [hasUser, setHasUser] = useState(true);
  //

  const toggleMenu = () => {
    // TODO: Disable body scrolling on open
    setIsMenuActive(!isMenuActive);
  };

  return (
    <>
      <li>
        <button
          onClick={toggleMenu}
          className={styles.hamburgerBtn}
          data-active-user={`${hasUser}`}
        >
          <HamburgerIcon />
        </button>
      </li>

      {isMenuActive && <HamburgerMenu toggleMenu={toggleMenu} />}
    </>
  );
}

export default Hamburger;
