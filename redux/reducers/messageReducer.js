const addMesagge = (state, action) => {
  return [
    ...state,
    {
      id: action.id,
      text: action.text
    }
  ];
};

const editMessage = (state, action) => {
  return state.map(message =>
    message.id === action.id ? { ...message, text: action.text } : message
  );
};

const removeMessage = (state, action) => {
  return state.filter(message => message.id !== action.id);
};

const removeAllMessages = state => {
  return state.splice(0, state.length - 1);
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_MESSAGE":
      return addMesagge(state, action);
    case "EDIT_MESSAGE":
      return editMessage(state, action);
    case "REMOVE_MESSAGE":
      return removeMessage(state, action);
    case "REMOVE_ALL_MESSAGES":
      return removeAllMessages(state);
    default: {
      return state;
    }
  }
};

export default messageReducer;
