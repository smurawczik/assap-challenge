import React, { useEffect } from 'react';
import classnames from 'classnames';

import MessageStatus from '../MessageStatus';

import { useGlobalState } from '../../../../components/hooks';

import { messageSeen } from '../../actions';

import { MESSAGE_STATUS } from '../../../../config/constants';

import './styles.scss';

const Messages = ({ className, message, from, repeatedUserMessage, lastMessage }) => {
  
  const [, dispatch] = useGlobalState();

  /**
   * define if message comes from sender
   * and build classes upon that variable
   */
  const messageFromSender = from.id === message.from;
  const messageClasses = classnames(className, {
    [`${className}--from`]: messageFromSender,
    [`${className}--to`]: !messageFromSender,
  })

  /**
   * since this is a shared component in the same window
   * i need to check whether to use sender or receiver status
   */
  const status = (lastMessage && messageFromSender) ? message.fromStatus : message.toStatus;

  /**
   * basically update last message to seen whenever its necessary
   */
  const hasToUpdateToSeen = lastMessage && from.id !== message.from && from.focus && status === MESSAGE_STATUS.RECEIVED;
  useEffect(() => {
    if (hasToUpdateToSeen) {
      dispatch(messageSeen());
    }
  }, [hasToUpdateToSeen, dispatch])

  return (
    <>
      <div className={messageClasses}>
        {
          !repeatedUserMessage && <div className={`${className}--data`}>
            <span className={`${className}--user`}>{message.userName}: </span>
            <span className={`${className}--datetime`}>{message.datetime}</span>
          </div>
        }
        <span className={`${className}--message`}>{message.message}</span>
      </div>
      {
        lastMessage && <MessageStatus status={status} />
      }
    </>
  );
}

Messages.defaultProps = {
  className: 'message',
}

export default Messages;