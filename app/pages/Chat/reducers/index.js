const reducer = (state, action) => {
  switch (action.type) {
    case 'SEND_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, action.message],
      };
    
    case 'USER_TYPING':
      return {
        ...state,
        room: {
          ...state.room,
          userTyping: action.isTyping,
        }
      };
    case 'ADMIN_TYPING':
      return {
        ...state,
        room: {
          ...state.room,
          adminTyping: action.isTyping,
        }
      };

    default:
      return state;
  }
};

export default reducer;