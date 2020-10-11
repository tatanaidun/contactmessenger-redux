import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./ContactsBar.css";
import { getLettersFromName } from "../../util";

function Contact({ name, email, phone, onClick }) {
  return (
    <div className="contact" onClick={onClick}>
      <Avatar style={{ backgroundColor: "#f80759" }}>
        <p className="avatarText">{getLettersFromName(name)}</p>
      </Avatar>
      <div className="contact__basic">
        <h5>{name}</h5>
        <p>{email}</p>
      </div>
      <p className="contact__phone">{phone}</p>
    </div>
  );
}

export default Contact;
