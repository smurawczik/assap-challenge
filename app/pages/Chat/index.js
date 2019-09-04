import React from 'react';

import { useGlobalState } from '../../components/hooks';

import ChatView from './components/ChatView';

import './styles.scss';

const Chat = ({ className }) => {
  const [{ room }] = useGlobalState();

  const admin = room.users.admin;
  const user = room.users.customer;

  return (
    <div className={className}>
      <ChatView user={admin} counterPart={user} />
      <ChatView user={user} counterPart={admin} />
    </div>
  );
}

Chat.defaultProps = {
  className: 'chat',
};

export default Chat;