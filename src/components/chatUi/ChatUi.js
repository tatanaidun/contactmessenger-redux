import React, { useEffect, useState } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import { useStateValue } from "../../datalayer/StateProvider";
import "./ChatUi.css";
import db from "../../firebase";

import firebase from "firebase";
import { getLettersFromName } from "../../util";

function ChatUi() {
  const [{ currentCard, currentUser }] = useStateValue();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const dbKeyGen = () =>
    (currentUser + currentCard.name)
      .split(" ")
      .join("")
      .toLowerCase()
      .split("")
      .sort()
      .join("");

  useEffect(() => {
    db.collection("messages")
      .doc(dbKeyGen())
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, [currentCard, currentUser]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (input.length > 0) {
      db.collection("messages").doc(dbKeyGen()).collection("messages").add({
        message: input,
        senderName: currentUser,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
    setInput("");
  };
  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="chatUi">
      <div className="chatUi__header">
        <Avatar
          style={{
            backgroundColor: "#f80759",
          }}
        >
          <p className="avatarText">{getLettersFromName(currentCard.name)}</p>
        </Avatar>
        <div className="chatUi__headerInfo">
          <h4>{currentCard.name}</h4>
        </div>
        <div className="chatUi__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chatUi__body">
        {messages.map((message) => (
          <p
            className={`chatUi__message ${
              currentUser === message.senderName && "chatUi__receiver"
            }`}
          >
            {message.message}
            <span className="chatUi__timestamp">
              {new Date(message.timestamp?.toDate()).toLocaleString()}
            </span>
          </p>
        ))}
      </div>
      <div className="chatUi__footer">
        <InsertEmoticonIcon />
        <form>
          <input
            value={input}
            onChange={changeHandler}
            type="text"
            placeholder="Type a message"
          />
          <button type="submit" onClick={sendMessage}>
            Send a message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default ChatUi;
