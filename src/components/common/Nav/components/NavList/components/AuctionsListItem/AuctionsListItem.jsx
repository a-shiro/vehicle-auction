// Hooks
import { useState } from "react";
// Components
import { Link } from "react-router-dom";
// CSS
import styles from "./AuctionsListItem.module.css";

function AuctionsListItem() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <li onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
      <Link to="/">Auctions</Link>

      {isDropdownVisible && (
        <ul className={styles.dropdownList}>
          <li>
            <Link to="/">Live Auctions</Link>
          </li>
          <li>
            <Link to="/past-auctions">Past Results</Link>
          </li>
        </ul>
      )}
    </li>
  );
}

export default AuctionsListItem;
