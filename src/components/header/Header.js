import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import TelegramIcon from "@material-ui/icons/Telegram";
import ContactListToLogin from "../contactShortList/ContactListToLogin";
import "./Header.css";
import { useSelector, useDispatch } from "react-redux";
import { setClicked } from "../../datalayer/actions";

function Header() {
  const { currentUser, clicked } = useSelector(({ currentUser, clicked }) => ({
    currentUser,
    clicked,
  }));

  const dispatch = useDispatch();
  const showContactsShortList = () => {
    dispatch(setClicked(!clicked));
  };

  return (
    <div className="header">
      <div className="header__title">
        <TelegramIcon style={{ width: "80px", height: "80px" }} />
        <p>Contact Messenger</p>
      </div>
      <div className="header__contactname" onClick={showContactsShortList}>
        <p className={`header__login ${currentUser.length < 1 && "shake"}`}>
          {currentUser.length > 1 ? currentUser : "Login"}
        </p>
        {clicked ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </div>

      {clicked && (
        <div className="header__contacts">
          <ContactListToLogin />
        </div>
      )}
    </div>
  );
}

export default Header;
