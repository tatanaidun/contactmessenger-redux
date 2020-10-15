import React, { useEffect, useState } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import "./ChatUi.css";
import { getLettersFromName } from "../../util";
import { useSelector, useDispatch } from "react-redux";
import { addMessages } from "../../datalayer/actions";

function ChatUi() {
  const { currentCard, currentUser, allmessages } = useSelector(
    ({ currentCard, currentUser, allmessages }) => ({
      currentCard,
      currentUser,
      allmessages,
    })
  );

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const dispatch = useDispatch();
  const dbKeyGen = () =>
    (currentUser + currentCard.name)
      .split(" ")
      .join("")
      .toLowerCase()
      .split("")
      .sort()
      .join("");

  useEffect(() => {
    setMessages(allmessages[dbKeyGen()] || []);
  }, [currentCard, currentUser, allmessages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (input.length > 0) {
      dispatch(
        addMessages(dbKeyGen(), {
          message: input,
          senderName: currentUser,
          timestamp: new Date(),
        })
      );
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
            key={message?.timestamp}
            className={`chatUi__message ${
              currentUser === message.senderName && "chatUi__receiver"
            }`}
          >
            {message.message}
            <span className="chatUi__timestamp">
              {new Date(message.timestamp)?.toLocaleString()}
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
