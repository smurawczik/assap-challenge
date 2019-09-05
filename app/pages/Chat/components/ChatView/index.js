import React from 'react';

import Messages from '../Messages';
import SendMessage from '../SendMessage';
import UserTyping from '../UserTyping';

import './styles.scss';

const ChatView = ({ className, from, to }) => {

  return (
    <div className={className}>
      <Messages from={from.id} />
      <UserTyping from={to} />
      <SendMessage from={from} to={to} />
    </div>
  );
}

ChatView.defaultProps = {
  className: 'chat-view',
};

export default ChatView;