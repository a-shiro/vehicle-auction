// Hooks
import { useState } from "react";
// Components
import { Fragment } from "react";
import { ReactComponent as SearchIcon } from "../../../../../../../assets/svgs/search.svg";
import SearchMenu from "./components/SearchMenu";
// CSS
import styles from "./Search.module.css";

function Search() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    // TODO: Disable body scrolling on open
    setIsMenuActive(!isMenuActive);
  };

  return (
    <Fragment>
      <button onClick={toggleMenu} className={styles.searchBtn}>
        <SearchIcon />
      </button>

      {isMenuActive && <SearchMenu toggleMenu={toggleMenu} />}
    </Fragment>
  );
}

export default Search;
