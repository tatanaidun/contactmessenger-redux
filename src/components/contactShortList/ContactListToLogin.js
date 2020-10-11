import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { useStateValue } from "../../datalayer/StateProvider";
import "./ContactListToLogin.css";

export default function ContactListToLogin() {
  const [{ contacts, clicked }, dispatch] = useStateValue();

  const loginFunction = (contact) => {
    dispatch({ type: "SET_CURRENT_USER", currentUser: contact.name });
    dispatch({ type: "SET_CLICKED", clicked: !clicked });
    dispatch({ type: "SET_CURRENT_CARD", currentCard: contact });
    dispatch({ type: "SET_OPENCHAT_UI", openChat: false });
  };

  return (
    <div className="contactListToLogin">
      {contacts.map((contact) => (
        <div
          className="contactListToLogin__contact"
          onClick={() => loginFunction(contact)}
        >
          <Avatar />
          <p className="contactListToLogin__name">{contact.name}</p>
        </div>
      ))}
    </div>
  );
}
