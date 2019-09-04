import moment from 'moment';

export const initialState = {
  room: {
    roomId: 1,
    users: {
      admin: {
        id: 1,
        name: "Laura",
        // TODO move to constants
        type: "ADMIN"
      },
      customer: {
        id: 2,
        name: "Rob",
        // TODO move to constants
        type: "CUSTOMER"
      }
    },
    messages: [
      {
        from: 1,
        to: 2,
        message: "Hi! how may i help you?",
        userName: 'Laura',
        datetime: moment().format("YYYY-MM-DD HH:mm:ss"),
      },
      {
        from: 2,
        to: 1,
        message: "i need assitance",
        userName: 'Rob',
        datetime: moment().format("YYYY-MM-DD HH:mm:ss"),
      }
    ],
  }
}