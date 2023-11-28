// Hooks
import { useRef, useState } from "react";
// Components
import { ReactComponent as EyeIcon } from "../../../../../../../../../../assets/svgs/eye-icon.svg";
import { ReactComponent as EyeBlindIcon } from "../../../../../../../../../../assets/svgs/eye-blind-icon.svg";

// CSS
import styles from "./DefaultAuth.module.css";

function DefaultAuth() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const passwordField = useRef();

  const togglePasswordVisibility = () => {
    passwordField.current.type === "password"
      ? (passwordField.current.type = "text")
      : (passwordField.current.type = "password");

    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className={styles.defaultAuth}>
      <form className={styles.authForm}>
        <label>Email address</label>
        <input type="email" />

        <label>Password</label>
        <div className={styles.passwordContainer}>
          <input ref={passwordField} type="password" />
          <button onClick={togglePasswordVisibility} type="button">
            {passwordVisible ? <EyeBlindIcon /> : <EyeIcon />}
          </button>
        </div>

        <button>Sign in</button>
      </form>
    </div>
  );
}

export default DefaultAuth;
