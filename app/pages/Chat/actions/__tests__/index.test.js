import moment from 'moment';
import { MESSAGE_STATUS } from '../../../../config/constants';

import {
  isTyping, focusChat, messageSeen, sendMessageTo, updateLastMessageStatus
} from '../index';

describe("Actions for reducers", () => {
  it("should return a user typing action", () => {
    expect(isTyping({ type: "CUSTOM" }, false )).toEqual({
      type: `CUSTOM_TYPING`,
      typing: false,
    });
  });

  it("should return a focus action", () => {
    expect(focusChat({ type: "CUSTOM" }, true)).toEqual({
      type: `CUSTOM_FOCUS`,
      focus: true,
    });
  });

  it("should return a user typing action", () => {
    expect(messageSeen()).toEqual({
      type: `MESSAGE_SEEN`,
      status: MESSAGE_STATUS.SEEN,
    });
  });

  it("should return a user typing action", () => {
    expect(sendMessageTo({ id: 1, name: "Rob" }, { id: 2 }, "some message")).toEqual({
      type: "SEND_MESSAGE",
      message: {
        from: 1,
        to: 2,
        message: "some message",
        userName: "Rob",
        fromStatus: MESSAGE_STATUS.SEND,
        toStatus: MESSAGE_STATUS.RECEIVED,
        datetime: moment().format("YYYY-MM-DD HH:mm:ss"),
      }
    });
  });

  it("should return a user typing action", () => {
    expect(updateLastMessageStatus(MESSAGE_STATUS.SEEN)).toEqual({
      type: "UPDATE_MESSAGE_STATUS",
      status: MESSAGE_STATUS.SEEN,
    });
  });
});