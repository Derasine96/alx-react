import React from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.jpg";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";

function Notifications({ displayDrawer }) {
  return (
    <React.Fragment>
      {displayDrawer ? (
        <div className="flex-area">
          <div className="menuItem">
            <p>Your notifications</p>
          </div>
          <div className="Notifications">
            <button
              style={{ display: "inline", border: "none", color: "#3a3a3a", cursor: "pointer", cursor: "pointer", alignContent: "flex-end", position:"absolute", right: "0", marginRight:"30px", marginTop:"10px" }}
              aria-label="Close"
              onClick={console.log("Close button has been clicked")}
            >
              <img src={closeIcon} alt="closeIcon" width="10px" />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
              <NotificationItem type="default" value="New course available" />
              <NotificationItem type="urgent" value="New resume available" />
              <NotificationItem type="urgent" html={getLatestNotification()} />
            </ul>
          </div>
        </div>
      ) : (
        <div className="menuItem">
          <p>Your notifications</p>
        </div>
      )}
    </React.Fragment>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;