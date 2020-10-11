import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./ContactsBar.css";

function Contact({ name, email, phone, onClick }) {
  return (
    <div className="contact" onClick={onClick}>
      <Avatar />
      <div className="contact__basic">
        <h5>{name}</h5>
        <p>{email}</p>
      </div>
      <p className="contact__phone">{phone}</p>
    </div>
  );
}

export default Contact;
