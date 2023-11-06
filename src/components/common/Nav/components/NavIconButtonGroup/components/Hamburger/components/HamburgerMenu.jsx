// Hooks
import { useRef } from "react";
import useOutsideClick from "../../../hooks/useOutsideClick";
// Components
import MenuOptions from "./components/MenuOptions";
// CSS
import styles from "./HamburgerMenu.module.css";

function HamburgerMenu({ toggleMenu }) {
  const menuRef = useRef();

  useOutsideClick(menuRef, toggleMenu, "hamburgerMenu");

  return (
    <div ref={menuRef} className={styles.menu}>
      <header className={styles.menuHeader}>
        <h1>Menu</h1>
        <button onClick={toggleMenu}>×</button>
      </header>

      <ul className={styles.menuList}>
        <MenuOptions />
      </ul>
    </div>
  );
}

export default HamburgerMenu;
