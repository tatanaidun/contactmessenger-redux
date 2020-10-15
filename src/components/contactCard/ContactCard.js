import { Avatar, Button } from "@material-ui/core";
import React from "react";
import _ from "lodash";
import "./ContactCard.css";
import { getLettersFromName } from "../../util";
import { useSelector, useDispatch } from "react-redux";
import { setOpenChatUi } from "../../datalayer/actions";

function ContactCard() {
  const { currentCard, currentUser } = useSelector(
    ({ currentCard, currentUser }) => ({
      currentCard,
      currentUser,
    })
  );

  const dispatch = useDispatch();

  const openMessageUi = () => {
    dispatch(setOpenChatUi(true));
  };

  return (
    <div className="contactCard">
      <div className="contactCard__avatar flexCenter">
        <Avatar
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "#f80759",
          }}
        >
          <p>{getLettersFromName(currentCard.name)}</p>
        </Avatar>
      </div>
      <div className="contactCard__name flexCenter">
        <h3>{currentCard.name}</h3>
      </div>
      <div className="contactCard__info">
        {Object.keys(currentCard).map(
          (key, index) =>
            key !== "id" && (
              <div className="contactCard__details" key={index}>
                <div>
                  <p className="contactCard__text">{_.capitalize(key) + ":"}</p>
                </div>
                <div>
                  <p className="contactCard__text">{currentCard[key]}</p>
                </div>
              </div>
            )
        )}
      </div>
      {currentUser !== currentCard.name && (
        <div className="contactCard__messageButton flexCenter">
          <Button onClick={openMessageUi}>Message</Button>
        </div>
      )}
    </div>
  );
}

export default ContactCard;
