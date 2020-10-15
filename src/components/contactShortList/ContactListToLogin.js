import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./ContactListToLogin.css";
import { getLettersFromName } from "../../util";
import { useSelector, useDispatch } from "react-redux";
import {
  setCurrentUser,
  setClicked,
  setCurrentCard,
  setOpenChatUi,
} from "../../datalayer/actions";

export default function ContactListToLogin() {
  const { contacts, clicked } = useSelector(({ contacts, clicked }) => ({
    contacts,
    clicked,
  }));

  const dispatch = useDispatch();

  const loginFunction = (contact) => {
    dispatch(setCurrentUser(contact.name));
    dispatch(setClicked(!clicked));
    dispatch(setCurrentCard(contact));
    dispatch(setOpenChatUi(false));
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
