const addMessage = (id, text) => ({
  type: "ADD_MESSAGE",
  id,
  text
});

const editMessage = (id, text) => ({
  type: "EDIT_MESSAGE",
  id,
  text
});

const removeMessage = id => ({
  type: "REMOVE_MESSAGE",
  id
});

const removeAllMessages = () => ({
  type: "REMOVE_ALL_MESSAGES"
});

export const messageActionCreator = {
  addMessage,
  editMessage,
  removeMessage,
  removeAllMessages
};
