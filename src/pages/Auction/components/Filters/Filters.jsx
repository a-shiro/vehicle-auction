// Components
import { Link } from "react-router-dom";
// CSS
import styles from "./Filters.module.css";

function Filters() {
  return (
    <div className={styles.container}>
      <div className={styles.carFilters}>
        <button>Years</button>
        <button>Transmission</button>
        <button>Body Style</button>
      </div>

      <ul className={styles.auctionFilters}>
        <li>
          <Link>Ending soon</Link>
        </li>
        <li>
          <Link>Newly listed</Link>
        </li>
        <li>
          <Link>No reserve</Link>
        </li>
        <li>
          <Link>Lowest mileage</Link>
        </li>
      </ul>
    </div>
  );
}

export default Filters;
