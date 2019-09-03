import React from 'react';

import Messages from '../Messages';
import SendMessage from '../SendMessage';

const AdminChat = ({ className }) => {

  return (
    <div className={className}>
      <Messages />
      <SendMessage />
    </div>
  );
}

AdminChat.defaultProps = {
  className: 'admin-chat',
};

export default AdminChat;