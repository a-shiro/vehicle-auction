// Components
import { Link } from "react-router-dom";
// CSS
import styles from "./Footer.module.css";
// Assets
import { ReactComponent as YoutubeIcon } from "../../../assets/svgs/youtube.svg";
import { ReactComponent as InstagramIcon } from "../../../assets/svgs/instagram.svg";
import { ReactComponent as TwitterIcon } from "../../../assets/svgs/twitter.svg";
import { ReactComponent as FacebookIcon } from "../../../assets/svgs/facebook.svg";
import { ReactComponent as LinkedInIcon } from "../../../assets/svgs/linkedin.svg";

// Temp Assets
import logo from "../Nav/logo.png";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.brand}>
        <img src={logo} alt="" />
      </div>

      <div className={styles.linksContainer}>
        <h6>How it works</h6>

        <ul className={styles.linksList}>
          <li>
            <Link>Buying a car</Link>
          </li>
          <li>
            <Link>Selling a car</Link>
          </li>

          <li>
            <Link>Finalizing the Sale</Link>
          </li>

          <li>
            <Link>FAQ</Link>
          </li>
        </ul>
      </div>

      <div className={styles.linksContainer}>
        <h6>Sellers</h6>

        <ul className={styles.linksList}>
          <li>
            <Link>Submiting your car</Link>
          </li>
          <li>
            <Link>Photography guide</Link>
          </li>

          <li>
            <Link>Inspections</Link>
          </li>

          <li>
            <Link>Concierge sales</Link>
          </li>
        </ul>
      </div>

      <div className={styles.linksContainer}>
        <h6>Helpful Links</h6>

        <ul className={styles.linksList}>
          <li>
            <Link>Support</Link>
          </li>
          <li>
            <Link>Shipping</Link>
          </li>
        </ul>
      </div>

      <div>
        <ul className={styles.socialsList}>
          <li>
            <YoutubeIcon />
          </li>
          <li>
            <InstagramIcon />
          </li>
          <li>
            <TwitterIcon />
          </li>
          <li>
            <FacebookIcon />
          </li>
          <li>
            <LinkedInIcon />
          </li>
        </ul>

        <p className={styles.copyright}>
          <Link>© Copyright 2024 Vroom bids</Link>
        </p>

        <div className={styles.conditionLinks}>
          <p>
            <Link>Terms of use</Link>
          </p>
          <p>
            <Link>Privacy Policy</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
