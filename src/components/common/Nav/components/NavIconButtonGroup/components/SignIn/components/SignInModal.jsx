// CSS
import styles from "./SignInModal.module.css";
// Components
import { ReactComponent as GoogleIcon } from "../../../../../../../../assets/svgs/google-icon.svg";
import { ReactComponent as AppleIcon } from "../../../../../../../../assets/svgs/apple-icon.svg";
import { ReactComponent as FacebookIcon } from "../../../../../../../../assets/svgs/facebook-icon.svg";
import { ReactComponent as EyeIcon } from "../../../../../../../../assets/svgs/eye-icon.svg";
import { ReactComponent as EyeBlindIcon } from "../../../../../../../../assets/svgs/eye-blind-icon.svg";
// Hooks
import { useRef, useState } from "react";

function SignInModal({ toggleSignIn }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const passwordField = useRef();

  const togglePasswordVisibility = () => {
    passwordField.current.type === "password"
      ? (passwordField.current.type = "text")
      : (passwordField.current.type = "password");

    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <header className={styles.modalHeader}>
          <button onClick={toggleSignIn}>×</button>
          <h1>Sign In</h1>
          <p>
            Need to create an account? <span>Sign up here</span>
          </p>
        </header>

        <div className={styles.modalBody}>
          <div className={styles.thirdPartyAuth}>
            <button className={styles.googleBtn}>
              <GoogleIcon />
              Continue with Google
            </button>
            <button className={styles.appleBtn}>
              <AppleIcon />
              Continue with Apple
            </button>
            <button className={styles.facebookBtn}>
              <FacebookIcon />
              Continue with Facebook
            </button>
          </div>

          <div className={styles.divider}>
            <span>or</span>
          </div>

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

            <p className={styles.forgotPassword}>Forgot your password?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInModal;
