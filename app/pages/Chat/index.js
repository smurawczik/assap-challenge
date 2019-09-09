import React from 'react';

import ChatView from './components/ChatView';

import { useGlobalState } from '../../components/hooks';

import './styles.scss';

const Chat = ({ className }) => {
  const [{ room }] = useGlobalState();

  const { users } = room;
  const admin = users.admin;
  const user = users.customer;

  return (
    <div className={className}>
      { admin && <ChatView from={admin} to={user} /> }
      { user && <ChatView from={user} to={admin} /> }
    </div>
  );
}

Chat.defaultProps = {
  className: 'chat',
};

export default Chat;