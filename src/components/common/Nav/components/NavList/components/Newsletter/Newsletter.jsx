import { createPortal } from "react-dom";
// Hooks
import { useState } from "react";
// Components
import { Fragment } from "react";
import NewsletterModal from "./components/NewsletterModal";
// CSS
import styles from "./Newsletter.module.css";

function Newsletter() {
  const [isNewsletterActive, setIsNewsletterActive] = useState(false);

  const toggleNewsletter = () => {
    setIsNewsletterActive(!isNewsletterActive);
  };

  return (
    <Fragment>
      <button onClick={toggleNewsletter} className={styles.newsletterBtn}>
        Daily Email
      </button>

      {isNewsletterActive &&
        createPortal(
          <NewsletterModal toggleNewsletter={toggleNewsletter} />,
          document.getElementById("root")
        )}
    </Fragment>
  );
}

export default Newsletter;
