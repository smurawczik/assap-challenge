import React from 'react';

import Message from '../Message';

import { useGlobalState } from '../../../../components/hooks';

import './styles.scss';

const Messages = ({ className, singleMessageClassName, from }) => {

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
          return <Message key={i} message={message} from={from} repeatedUserMessage={repeatedUserMessage} />
        })
      }
    </div>
  );
}

Messages.defaultProps = {
  className: 'messages',
  singleMessageClassName: 'message',
}

export default Messages;