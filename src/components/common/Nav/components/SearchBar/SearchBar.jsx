// CSS
import styles from "./SearchBar.module.css";

function SearchForm() {
  // TODO: Add search functionality with a delay to the database request (refer to clip in phone notes)

  return (
    <form className={styles.searchForm}>
      <div>
        <input placeholder="Search for cars (ex. Jeep, Dodge, Audi)" />
      </div>
    </form>
  );
}

export default SearchForm;
