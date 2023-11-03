// Hooks
import { useState } from "react";
// Components
import SearchForm from "./components/SearchForm/SearchForm";
import SearchResults from "./components/SearchResults/SearchResults";
// CSS
import styles from "./SearchBar.module.css";

function SearchBar({ componentVisibile }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <div
      className={styles.searchBar}
      data-component-visible={componentVisibile}
    >
      <SearchForm inputValue={inputValue} setInputValue={setInputValue} />
      {inputValue && <SearchResults />}
    </div>
  );
}

export default SearchBar;
