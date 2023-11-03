// Hooks
import useViewportResize from "./hooks/useViewportResize";
// Components
import SearchBar from "../../../../SearchBar/SearchBar";
// CSS
import styles from "./SearchMenu.module.css";

function SearchMenu({ toggleMenu }) {
  useViewportResize(toggleMenu);

  return (
    <div className={styles.menu}>
      <header className={styles.menuHeader}>
        <h1>Search</h1>
        <button onClick={toggleMenu}>×</button>
      </header>

      <SearchBar componentVisibile={true} />
    </div>
  );
}

export default SearchMenu;
