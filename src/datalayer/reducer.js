export const initialState = {
  currentUser: "",
  clicked: false,
  currentCard: {},
  contacts: [
    {
      id: 1,
      name: "Tata Nukala",
      phone: 8919235358,
      email: "tatanaidunukala@gmail.com",
    },
    {
      id: 2,
      name: "Abhi Teja",
      phone: 7569062950,
      email: "abhi1234@gmail.com",
    },
    {
      id: 3,
      name: "Lakshmi K",
      phone: 8919123456,
      email: "lakhshmi@gmail.com",
    },
    { id: 4, name: "Sruthi R", phone: 8919123654, email: "sruthi@gmail.com" },
    {
      id: 5,
      name: "Carol Teja",
      phone: 7512362950,
      email: "carol1234@gmail.com",
    },
    { id: 6, name: "Vidhya K", phone: 7569123456, email: "vidhya@gmail.com" },
    { id: 7, name: "Syam P V", phone: 8888123654, email: "syam@gmail.com" },
  ],
  openChat: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return { ...state, currentUser: action.currentUser };
    case "SET_CLICKED":
      return { ...state, clicked: action.clicked };
    case "SET_OPENCHAT_UI":
      return { ...state, openChat: action.openChat };
    case "SET_CURRENT_CARD":
      return { ...state, currentCard: action.currentCard };
    default:
      return state;
  }
};
