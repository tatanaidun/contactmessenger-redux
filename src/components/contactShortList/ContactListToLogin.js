import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { useStateValue } from "../../datalayer/StateProvider";
import "./ContactListToLogin.css";
import { getLettersFromName } from "../../util";

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
          key={contact.id}
          className="contactListToLogin__contact"
          onClick={() => loginFunction(contact)}
        >
          <Avatar style={{ backgroundColor: "#f80759" }}>
            <p className="avatarText">{getLettersFromName(contact.name)}</p>
          </Avatar>
          <p className="contactListToLogin__name">{contact.name}</p>
        </div>
      ))}
    </div>
  );
}
