import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { IconButton } from "@material-ui/core";
import "./ContactsBar.css";
import { getLettersFromName } from "../../util";
import ChatIcon from "@material-ui/icons/Chat";

function Contact({ name, email, phone, onClick, openChat }) {
  return (
    <div className="contact">
      <Avatar style={{ backgroundColor: "#f80759" }}>
        <p className="avatarText">{getLettersFromName(name)}</p>
      </Avatar>
      <div className="contact__basic" onClick={onClick}>
        <h5>{name}</h5>
        <p>{email}</p>
      </div>
      <p className="contact__phone">{phone}</p>
      <IconButton onClick={openChat}>
        <ChatIcon />
      </IconButton>
    </div>
  );
}

export default Contact;
