import React from 'react';

import Message from '../Message';

import { useGlobalState } from '../../../../components/hooks';

import './styles.scss';

const Messages = ({ className, singleMessageClassName, from }) => {

  const [{ room }] = useGlobalState();
  const { messages } = room;

  return (
    <div className={className}>
      {
        messages && messages.map((message, i) => <Message key={i} message={message} from={from} />)
      }
    </div>
  );
}

Messages.defaultProps = {
  className: 'messages',
  singleMessageClassName: 'message',
}

export default Messages;