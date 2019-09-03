import React from 'react';

import { useGlobalState } from '../../components/hooks';

import ChatView from './components/ChatView';

import './styles.scss';

const Chat = ({ className }) => {
  const [{ room }] = useGlobalState();

  const admin = room.users.find(user => user.type === "ADMIN");
  const user = room.users.find(user => user.type === "CUSTOMER");

  return (
    <div className={className}>
      <ChatView user={admin} />
      <ChatView user={user} />
    </div>
  );
}

Chat.defaultProps = {
  className: 'chat',
};

export default Chat;