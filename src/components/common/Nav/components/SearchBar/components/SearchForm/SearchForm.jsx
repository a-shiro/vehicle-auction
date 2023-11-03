// CSS
import styles from "./SearchForm.module.css";

function SearchForm({ inputValue, setInputValue }) {
  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const clearForm = () => {
    setInputValue("");
  };

  return (
    <form>
      <div className={styles.fieldContainer}>
        <input
          value={inputValue}
          onChange={onChangeHandler}
          className={styles.searchField}
          type="text"
          placeholder="Search for cars (ex. Jeep, Dodge, Audi)"
        />

        {inputValue && (
          <button onClick={clearForm} className={styles.clearBtn}>
            Clear
          </button>
        )}
      </div>
    </form>
  );
}

export default SearchForm;
