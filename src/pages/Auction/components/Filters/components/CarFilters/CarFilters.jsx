// Hooks
import { useState } from "react";
// CSS
import styles from "./CarFilters.module.css";

function CarFilters() {
  const [widgetVisibility, setWidgetVisibility] = useState({
    yearWidget: false,
    transmissionWidget: false,
    bodyStyleWidget: false,
  });

  const toggleDropdown = (e) => {
    const clickedWidget = e.target.id;
    const isWidgetVisible = widgetVisibility[clickedWidget];

    setWidgetVisibility((prevState) => ({
      ...prevState,
      [clickedWidget]: !isWidgetVisible,
    }));
  };

  return (
    <div className={styles.carFilters}>
      <div className={styles.widget}>
        <button id="yearWidget" onClick={toggleDropdown}>
          1990-2025
        </button>

        {widgetVisibility.yearWidget && (
          <div className={`${styles.dropdown} ${styles.year}`}>
            <div>
              <input />
              <span>to</span>
              <input />
            </div>
          </div>
        )}
      </div>

      <div className={styles.widget}>
        <button id="transmissionWidget" onClick={toggleDropdown}>
          Transmission
        </button>

        {widgetVisibility.transmissionWidget && (
          <div className={`${styles.dropdown} ${styles.transmission}`}>
            <button>All</button>
            <button>Automatic</button>
            <button>Manual</button>
          </div>
        )}
      </div>

      <div className={styles.widget}>
        <button id="bodyStyleWidget" onClick={toggleDropdown}>
          Body Style
        </button>

        {widgetVisibility.bodyStyleWidget && (
          <div className={`${styles.dropdown} ${styles.bodyStyle}`}>
            <button>All</button>
            <button>Coupe</button>
            <button>Convertible</button>
            <button>Hatchback</button>
            <button>Sedan</button>
            <button>SUV/Crossover</button>
            <button>Truck</button>
            <button>Wagon</button>
            <button>Van/Minivan</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CarFilters;
