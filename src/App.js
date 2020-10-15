import React from "react";
import "./App.css";
import ContactsBar from "./components/contactsBar/ContactsBar";
import Header from "./components/header/Header";
import ContactCard from "./components/contactCard/ContactCard";
import ChatUi from "./components/chatUi/ChatUi";
import { useSelector } from "react-redux";

function App() {
  const {
    currentUser,
    openChat,
  } = useSelector(({ currentUser, openChat }) => ({ currentUser, openChat }));

  return (
    <div className="app">
      <div className="app__header">
        <Header />
      </div>
      {currentUser.length < 1 ? (
        <div className="app__welcome">
          <p>Please login to see your contacts list</p>
        </div>
      ) : (
        <>
          <div className="app__body">
            <div className="app__contactsBar">
              <ContactsBar />
            </div>
            {!openChat && (
              <div className="app__contactCard">
                <ContactCard />
              </div>
            )}

            {openChat && (
              <div className="app__chatUi">
                <ChatUi />
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
