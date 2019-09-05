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
      <ChatView from={admin} to={user} />
      <ChatView from={user} to={admin} />
    </div>
  );
}

Chat.defaultProps = {
  className: 'chat',
};

export default Chat;