import React from 'react';

import './styles.scss';

const MessageStatus = ({ className, status }) => {
  return (
    <div className={className}>{status}</div>
  );
}

MessageStatus.defaultProps = {
  className: 'message-status',
}

export default MessageStatus;