export const initialState = {
  currentUser: "",
  clicked: false,
  currentCard: {},
  contacts: [
    {
      id: 1,
      name: "Tata Nukala",
      phone: 8919235358,
      email: "tataabhi@gmail.com",
    },
    {
      id: 2,
      name: "Abhi Teja",
      phone: 7569062950,
      email: "abhi1234@gmail.com",
    },
    {
      id: 3,
      name: "Tom Cruise",
      phone: 8919123456,
      email: "tomcruise@gmail.com",
    },
    { id: 4, name: "Sri Ram", phone: 8919123654, email: "sriram@gmail.com" },
    {
      id: 5,
      name: "Carol Teja",
      phone: 7512362950,
      email: "carol1234@gmail.com",
    },
    {
      id: 6,
      name: "Vineeth V",
      phone: 7569123456,
      email: "vineethv@gmail.com",
    },
    { id: 7, name: "Syam V", phone: 8888123654, email: "syam@gmail.com" },
    {
      id: 8,
      name: "Maxwell William",
      phone: 1234567890,
      email: "maxwellw@gmail.com",
    },
    {
      id: 9,
      name: "Priya R",
      phone: 7891234567,
      email: "priyar@gmail.com",
    },
    {
      id: 10,
      name: "Padma P",
      phone: 9999123654,
      email: "padmapv@gmail.com",
    },
    {
      id: 11,
      name: "Bhavya B",
      phone: 9456789159,
      email: "bhavyab@gmail.com",
    },
    {
      id: 12,
      name: "Lakshmi K",
      phone: 7777123654,
      email: "lakshmik@gmail.com",
    },
  ],
  openChat: false,
  allmessages: {},
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
    case "ADD_CONTACTS":
      return { ...state, contacts: [...state.contacts, action.contact] };
    case "ADD_MESSAGES":
      const newMessageObj = { ...state.allmessages };
      if (state.allmessages[action.payload.key]) {
        newMessageObj[action.payload.key] = [
          ...state.allmessages[action.payload.key],
          action.payload.messageObj,
        ];
      } else {
        newMessageObj[action.payload.key] = [action.payload.messageObj];
      }
      return { ...state, allmessages: newMessageObj };
    default:
      return state;
  }
};
