import React from 'react';
import classnames from 'classnames';

import './styles.scss';

const Messages = ({ className, message, from }) => {
  
  const messageClasses = classnames(className, {
    [`${className}--from`]: from === message.from,
  })

  return (
    <div
      className={messageClasses}
    >
      <div className={`${className}--data`}>
        <span className={`${className}--user`}>{message.userName}: </span>
        <span className={`${className}--datetime`}>{message.datetime}</span>
      </div>
      <span className={`${className}--message`}>{message.message}</span>
    </div>
  );
}

Messages.defaultProps = {
  className: 'message',
}

export default Messages;