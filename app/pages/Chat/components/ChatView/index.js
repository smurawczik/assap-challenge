import React from 'react';

import Messages from '../Messages';
import SendMessage from '../SendMessage';
import UserTyping from '../UserTyping';

import { useGlobalState } from '../../../../components/hooks';

import { focusChat } from '../../actions';

import './styles.scss';

const ChatView = ({ className, from, to }) => {

  const [, dispatch] = useGlobalState();

  return (
    <div className={className} onClick={() => dispatch(focusChat(from, true))}>
      <Messages from={from} />
      <UserTyping from={to} />
      <SendMessage from={from} to={to} />
    </div>
  );
}

ChatView.defaultProps = {
  className: 'chat-view',
};

export default ChatView;