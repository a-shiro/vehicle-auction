// Components
import { ReactComponent as GoogleIcon } from "../../../../../../../../../../assets/svgs/google-icon.svg";
import { ReactComponent as AppleIcon } from "../../../../../../../../../../assets/svgs/apple-icon.svg";
import { ReactComponent as FacebookIcon } from "../../../../../../../../../../assets/svgs/facebook-icon.svg";
// CSS
import styles from "./ThirdPartyAuth.module.css";

function ThirdPartyAuth() {
  return (
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
  );
}

export default ThirdPartyAuth;
