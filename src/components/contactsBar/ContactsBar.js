import React, { useState } from "react";
import "./ContactsBar.css";
import Contact from "./Contact";
import { Button, Modal, TextField } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { useSelector, useDispatch } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";
import {
  setCurrentCard,
  setOpenChatUi,
  addNewContact,
} from "../../datalayer/actions";

function containsSpecialCharacters(str) {
  var regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
  return regex.test(str);
}

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function ContactsBar() {
  const {
    currentUser,
    contacts,
  } = useSelector(({ currentUser, contacts }) => ({ currentUser, contacts }));

  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const showContactInfo = (contact) => {
    dispatch(setCurrentCard(contact));
    dispatch(setOpenChatUi(false));
  };

  const onClickHandler = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleNameChange = (event) => {
    if (containsSpecialCharacters(event.target.value)) {
      setError("Name should not contain special characters");
    } else {
      setError("");
      setSuccess("");
      setName(event.target.value);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setError("");
    setSuccess("");
  };

  const handlePhoneChange = (event) => {
    if (event.target.value.length < 11) {
      setError("");
      setSuccess("");
      setPhone(event.target.value);
    }
  };

  const openMessageUi = (contact) => {
    dispatch(setCurrentCard(contact));
    dispatch(setOpenChatUi(true));
  };

  const submitHandler = () => {
    if (!validateEmail(email)) {
      setError("Check your email");
    } else if (name.length === 0) {
      setError("Please add name");
    } else if (phone.length !== 10) {
      setError("Phone number should contain 10 digits");
    } else {
      let check = false;
      contacts.forEach(
        (contact) =>
          (contact.name === name || contact.phone === phone) && (check = true)
      );

      if (check) {
        setError("This contact already exists");
      } else {
        const newContact = {
          id: contacts.length + 1,
          name: name,
          phone: parseInt(phone),
          email: email,
        };

        dispatch(addNewContact(newContact));
        setSuccess("Contacted got added");
        setError("");
        setPhone("");
        setEmail("");
        setName("");
      }
    }
  };

  return (
    <>
      <div className="contactsBar__addContact">
        <div className="contactsBar__searchBar">
          <input style={{ fontSize: "16px" }} placeholder="search contacts" />
          <SearchIcon className="contactsBar__searchIcon" />
        </div>
        <Button onClick={onClickHandler} variant="contained" color="primary">
          Add contact
        </Button>
      </div>
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
                key={contact.id}
                openChat={() => openMessageUi(contact)}
                onClick={() => showContactInfo(contact)}
                name={contact.name}
                email={contact.email}
                phone={contact.phone}
              />
            ))}
        </div>
        <Modal open={showModal}>
          <div className="contactsBar__addContactForm">
            <div className="contactsBar__addContactFormModal">
              <div>
                {error.length > 1 && <Alert severity="error">{error}</Alert>}
              </div>
              <div>
                {success.length > 1 && (
                  <Alert severity="success">{success}</Alert>
                )}
              </div>

              <div className="contactsBar__addContactFormTextField">
                <TextField
                  className="contactsBar__addContactFormTextFieldInput"
                  id="name"
                  type="text"
                  label="Name"
                  variant="outlined"
                  onChange={handleNameChange}
                  value={name}
                />
              </div>

              <div className="contactsBar__addContactFormTextField">
                <TextField
                  className="contactsBar__addContactFormTextFieldInput"
                  id="phone"
                  type="number"
                  label="Phone"
                  variant="outlined"
                  onChange={handlePhoneChange}
                  value={phone}
                />
              </div>

              <div className="contactsBar__addContactFormTextField">
                <TextField
                  className="contactsBar__addContactFormTextFieldInput"
                  id="email"
                  type="email"
                  label="Email"
                  variant="outlined"
                  onChange={handleEmailChange}
                  value={email}
                />
              </div>

              <div className="contactsBar__addContactFormButtons">
                <Button
                  onClick={handleClose}
                  variant="outlined"
                  color="secondary"
                >
                  Close
                </Button>
                <Button
                  style={{
                    background: "linear-gradient(to right, #f80759, #bc4e9c)",
                  }}
                  onClick={submitHandler}
                  variant="contained"
                  color="primary"
                >
                  Create
                </Button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default ContactsBar;
