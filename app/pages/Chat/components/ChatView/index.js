import React from 'react';

import Messages from '../Messages';
import SendMessage from '../SendMessage';

const ChatView = ({ className, user }) => {

  return (
    <div className={className}>
      <Messages from={user.id} />
      <SendMessage user={user} />
    </div>
  );
}

ChatView.defaultProps = {
  className: 'chat-view',
};

export default ChatView;