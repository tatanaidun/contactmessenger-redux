import React from "react";
import _ from "lodash";
import { useStateValue } from "../../datalayer/StateProvider";
import "./ContactsBar.css";
import Contact from "./Contact";

function ContactsBar() {
  const [{ currentUser, contacts }, dispatch] = useStateValue();

  const showContactInfo = (contact) => {
    dispatch({ type: "SET_CURRENT_CARD", currentCard: contact });
    dispatch({ type: "SET_OPENCHAT_UI", openChat: false });
  };

  return (
    <div className="contactsBar">
      <div className="contactsBar__header">
        <p className="contactsBar__header__basicInfo">Basic info</p>
        <p className="contactsBar__header__phone">Phone</p>
      </div>
      <div className="contactsBar__body">
        {contacts
          .filter((contact) => contact.name !== currentUser)
          .map((contact) => (
            <Contact
              onClick={() => showContactInfo(contact)}
              name={contact.name}
              email={contact.email}
              phone={contact.phone}
            />
          ))}
      </div>
    </div>
  );
}

export default ContactsBar;
