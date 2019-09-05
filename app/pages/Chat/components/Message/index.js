import React from 'react';
import classnames from 'classnames';

import MessageStatus from '../MessageStatus';

import './styles.scss';

const Messages = ({ className, message, from, repeatedUserMessage, lastMessage }) => {
  
  const messageFromSender = from === message.from;
  const messageClasses = classnames(className, {
    [`${className}--from`]: messageFromSender,
    [`${className}--to`]: !messageFromSender,
  })

  const status = (lastMessage && messageFromSender) ? message.fromStatus : message.toStatus;

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