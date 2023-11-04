// Hooks
import { useState } from "react";
// Components
import { Fragment } from "react";
import { Link } from "react-router-dom";

function MenuOptions() {
  // TODO: Replace this with authentication system
  const [hasUser, setHasUser] = useState(true);
  //

  return (
    <Fragment>
      {hasUser && (
        <Fragment>
          <li>
            <Link to="/account">Profile</Link>
          </li>
          <li>
            <Link to="/watch-list">Watch List</Link>
          </li>
          <li>
            <Link to="/account/listings">My Listings</Link>
          </li>
        </Fragment>
      )}

      <li data-auth="false">
        <Link to="/">Live Auctions</Link>
      </li>
      <li data-auth="false">
        <Link to="/past-auctions">Past Results</Link>
      </li>
      <li data-auth="false">
        <Link to="about-us">What's Vroom Bids?</Link>
      </li>
      <li data-auth="false">
        <button>Daily Email</button>
      </li>

      {hasUser && (
        <Fragment>
          <li>
            <Link to="/account/settings">Settings</Link>
          </li>
          <li>
            <button>Sign out</button>
          </li>
        </Fragment>
      )}
    </Fragment>
  );
}

export default MenuOptions;
