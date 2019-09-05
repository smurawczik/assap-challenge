import moment from 'moment';

import { MESSAGE_STATUS } from '../../../config/constants';

export const isTyping = (user, typing) => {
  return {
    type: `${user.type}_TYPING`,
    typing,
  }
}

export const focusChat = (user, focus) => {
  return {
    type: `${user.type}_FOCUS`,
    focus,
  }
}

export const messageSeen = () => {
  return {
    type: `MESSAGE_SEEN`,
    status: MESSAGE_STATUS.SEEN,
  }
}

export const sendMessageTo = (from, to, message) => {
  return {
    type: "SEND_MESSAGE",
    message: {
      from: from.id,
      to: to.id,
      message: message.toString(),
      userName: from.name,
      fromStatus: MESSAGE_STATUS.SEND,
      toStatus: MESSAGE_STATUS.RECEIVED,
      datetime: moment().format("YYYY-MM-DD HH:mm:ss"),
    }
  }
}

export const updateLastMessageStatus = (status) => {
  return {
    type: "UPDATE_MESSAGE_STATUS",
    status: status,
  }
}