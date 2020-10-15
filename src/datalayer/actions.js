export const setOpenChatUi = (flag) => {
  return { type: "SET_OPENCHAT_UI", openChat: flag };
};

export const setCurrentCard = (contact) => {
  return { type: "SET_CURRENT_CARD", currentCard: contact };
};

export const setCurrentUser = (name) => {
  return { type: "SET_CURRENT_USER", currentUser: name };
};

export const setClicked = (flag) => {
  return { type: "SET_CLICKED", clicked: flag };
};

export const addNewContact = (newContact) => {
  return {
    type: "ADD_CONTACTS",
    contact: newContact,
  };
};

export const addMessages = (key, messageObj) => {
  return {
    type: "ADD_MESSAGES",
    payload: { key: key, messageObj: messageObj },
  };
};
