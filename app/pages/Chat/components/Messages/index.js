import React from 'react';

import Message from '../Message';

import { useGlobalState } from '../../../../components/hooks';

import './styles.scss';

const Messages = ({ className, from }) => {

  const [{ room }] = useGlobalState();
  const { messages } = room;

  let previousMessage;

  return (
    <div className={className}>
      {
        messages && messages.map((message, i) => {
          let repeatedUserMessage = false;
          if (previousMessage && previousMessage.from === message.from) {
            repeatedUserMessage = true;
          }
          previousMessage = message;
          return <Message key={i} message={message} from={from} lastMessage={i === messages.length - 1} repeatedUserMessage={repeatedUserMessage} />
        })

      }
    </div>
  );
}

Messages.defaultProps = {
  className: 'messages',
}

export default Messages;