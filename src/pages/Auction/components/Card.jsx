// Components
import { Link } from "react-router-dom";
import { ReactComponent as FavoriteEmptyIcon } from "../../../assets/svgs/star-empty.svg";
import { ReactComponent as FavoriteFilledIcon } from "../../../assets/svgs/star-filled.svg";
// CSS
import styles from "./Card.module.css";

// Temp Assets
import cardThumbnail from "./card_thumbnail.jpg";

function Card() {
  return (
    <div className={styles.card}>
      <Link className={styles.thumbnail} to="/auctions/:auctionId">
        <img src={cardThumbnail} alt="thumbnail" />

        <div className={styles.thumbnailData}>
          <p className={styles.timer}>9:00:30</p>
          <p className={styles.bid}>$970,000</p>
        </div>
      </Link>

      <div className={styles.data}>
        <div>
          <Link className={styles.title} to="/auctions/:auctionId">
            2015 Aston Martin V8 Vantage GT
          </Link>
          <button className={styles.favoriteBtn}>
            {/* TODO: Favoriting functionality to swap visible icon */}
            <FavoriteEmptyIcon />
            <FavoriteFilledIcon />
          </button>
        </div>

        <p>19,300 Miles, 6-Speed Manual, V8 Power, GT Graphics Pack</p>
        <p>Dallas, TX 75252</p>
      </div>
    </div>
  );
}

export default Card;
