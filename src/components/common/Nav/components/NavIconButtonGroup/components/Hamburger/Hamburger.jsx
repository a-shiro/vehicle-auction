// Hooks
import { useState } from "react";
// Components
import { Fragment } from "react";
import { ReactComponent as HamburgerIcon } from "../../../../../../../assets/svgs/hamburger-menu.svg";
import HamburgerMenu from "./components/HamburgerMenu";
// CSS
import styles from "./Hamburger.module.css";

// FIXME: Switching from portrait to landscape on mobile enlarges the anchor tag font size (only when menu is active)

function Hamburger() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    // TODO: Disable body scrolling on open
    setIsMenuActive(!isMenuActive);
  };

  return (
    <Fragment>
      <button
        data-link-key="hamburgerMenu"
        onClick={toggleMenu}
        className={styles.hamburgerBtn}
      >
        <HamburgerIcon />
      </button>

      {isMenuActive && <HamburgerMenu toggleMenu={toggleMenu} />}
    </Fragment>
  );
}

export default Hamburger;
