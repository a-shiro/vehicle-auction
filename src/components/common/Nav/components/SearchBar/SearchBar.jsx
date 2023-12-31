// Hooks
import { useRef, useState } from "react";
// Components
import SearchForm from "./components/SearchForm/SearchForm";
import SearchResults from "./components/SearchResults/SearchResults";
// CSS
import styles from "./SearchBar.module.css";

function SearchBar({ componentVisibile }) {
  const [inputValue, setInputValue] = useState("");
  const [resultsActive, setResultsActive] = useState(false);

  const searchBarRef = useRef();

  return (
    <div
      ref={searchBarRef}
      className={styles.searchBar}
      data-component-visible={componentVisibile}
    >
      <SearchForm
        inputValue={inputValue}
        setInputValue={setInputValue}
        setResultsActive={setResultsActive}
      />
      {resultsActive && inputValue && (
        <SearchResults
          searchBarRef={searchBarRef}
          setResultsActive={setResultsActive}
        />
      )}
    </div>
  );
}

export default SearchBar;
