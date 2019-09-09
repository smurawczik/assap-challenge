import moment from 'moment';

import { MESSAGE_STATUS, USER_TYPES } from '../../config/constants';

export const initialState = {
  room: {
    roomId: 1,
    users: {
      admin: {
        id: 1,
        name: "Laura",
        type: USER_TYPES.ADMIN
      },
      customer: {
        id: 2,
        name: "Rob",
        type: USER_TYPES.CUSTOMER
      }
    },
    // This messages are as a sample, but can be safely deleted
    messages: [
      {
        id: 1,
        from: 1,
        to: 2,
        message: "Hi! how may i help you?",
        userName: 'Laura',
        fromStatus: MESSAGE_STATUS.SEND,
        toStatus: MESSAGE_STATUS.RECEIVED,
        datetime: moment().format("YYYY-MM-DD HH:mm:ss"),
      }
    ],
  }
}