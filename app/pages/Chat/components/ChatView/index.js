import React from 'react';

import Messages from '../Messages';
import SendMessage from '../SendMessage';
import UserTyping from '../UserTyping';

import './styles.scss';

const ChatView = ({ className, user, counterPart }) => {

  return (
    <div className={className}>
      <Messages from={user.id} />
      <UserTyping user={counterPart} />
      <SendMessage user={user} />
    </div>
  );
}

ChatView.defaultProps = {
  className: 'chat-view',
};

export default ChatView;