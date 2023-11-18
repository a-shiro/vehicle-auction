// Components
import { ReactComponent as NewsletterIcon } from "../../../../../../../../assets/svgs/newsletter.svg";
import NewsletterForm from "./components/NewsletterForm";
// CSS
import styles from "./NewsletterModal.module.css";

function NewsletterModal({ toggleNewsletter }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <header className={styles.modalHeader}>
          <button onClick={toggleNewsletter}>×</button>
          <NewsletterIcon />
          <h1>Get Daily Emails</h1>
        </header>

        <div className={styles.modalBody}>
          <p>
            Get the latest auctions and market info delivered right to your
            inbox.
          </p>

          <NewsletterForm />
        </div>
      </div>
    </div>
  );
}

export default NewsletterModal;
