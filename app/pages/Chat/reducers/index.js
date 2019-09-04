const reducer = (state, action) => {
  switch (action.type) {
    case 'SEND_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, action.message],
      };
    
    case 'CUSTOMER_TYPING':
      return {
        room: {
          ...state.room,
          users: {
            admin: {
              ...state.room.users.admin,
            },
            customer: {
              ...state.room.users.customer,
              typing: action.typing,
            }
          }
        },
      };
    case 'ADMIN_TYPING':
      return {
        room: {
          ...state.room,
          users: {
            admin: {
              ...state.room.users.admin,
              typing: action.typing,
            },
            customer: {
              ...state.room.users.customer,
            }
          },
        },
      };

    default:
      return state;
  }
};

export default reducer;