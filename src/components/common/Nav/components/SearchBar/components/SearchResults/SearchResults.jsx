// Hooks
import useOutsideClick from "../../../NavIconButtonGroup/hooks/useOutsideClick";
// Components
import { Link } from "react-router-dom";
// CSS
import styles from "./SearchResults.module.css";

function SearchResults({ searchBarRef, setResultsActive }) {
  // TODO: Replace li tags with mapped filtered data from database

  // TODO: Upon user input prevent instant fetch request, instead delay by few seconds (optimization) (refer to clip in phone notes)

  // TODO: Figure out how to recieve brand, brand + model from database

  // TODO: Limit search results to only first 10 regardless of the matches

  useOutsideClick(
    searchBarRef,
    () => {
      setResultsActive(false);
    },
    "search"
  );

  return (
    <ul className={styles.searchResults}>
      <li>
        {/* TODO: Replace :filter with url field from database */}
        <Link to="/search/:filter">Acura NSX</Link>
      </li>
      <li>
        <Link to="/search/:filter">Audi R8</Link>
      </li>
      <li>
        <Link to="/search/:filter">Audi S4</Link>
      </li>
      <li>
        <Link to="/search/:filter">Audi </Link>
      </li>
    </ul>
  );
}

export default SearchResults;
