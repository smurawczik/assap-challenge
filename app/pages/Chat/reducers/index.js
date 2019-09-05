const reducer = (state, action) => {
  switch (action.type) {
    case 'SEND_MESSAGE':
      return {
        room: {
          ...state.room,
          messages: [...state.room.messages, {...action.message, id: state.room.messages.length + 1}],
        }
      };
    
    case 'MESSAGE_SEEN':
      const latestMessage = state.room.messages.pop();
      latestMessage.fromStatus = action.status;
      return {
        room: {
          ...state.room,
          messages: [...state.room.messages, latestMessage],
        }
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
    
    case 'CUSTOMER_FOCUS':
      return {
        room: {
          ...state.room,
          users: {
            admin: {
              ...state.room.users.admin,
              focus: false,
            },
            customer: {
              ...state.room.users.customer,
              focus: action.focus,
            }
          }
        },
      };
    case 'ADMIN_FOCUS':
      return {
        room: {
          ...state.room,
          users: {
            admin: {
              ...state.room.users.admin,
              focus: action.focus,
            },
            customer: {
              ...state.room.users.customer,
              focus: false,
            }
          },
        },
      };

    default:
      return state;
  }
};

export default reducer;