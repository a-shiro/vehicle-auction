// Hooks
import { useState } from "react";
// CSS
import styles from "./NewsletterForm.module.css";

function NewsletterForm() {
  const [inputValue, setInputValue] = useState("");

  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // TODO: Add newsletter subscription logic
  };

  return (
    <form onSubmit={onSubmitHandler} className={styles.modalForm}>
      <input
        value={inputValue}
        onChange={onChangeHandler}
        type="email"
        placeholder="Email address"
        required
      />
      <button type="submit">Subscribe</button>
    </form>
  );
}

export default NewsletterForm;
