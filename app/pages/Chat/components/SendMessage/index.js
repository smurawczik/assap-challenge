import React, { useState } from 'react';
import { useGlobalState } from '../../../../components/hooks';

import './styles.scss';

let typingTimeout = null;

const SendMessage = ({ className, user }) => {
  const [message, setMessage] = useState('');
  const [typing, setIsTyping] = useState(false);
  const [, dispatch] = useGlobalState();


  const onTyping = (value) => {
    setMessage(value);

    clearTimeout(typingTimeout);
    typingTimeout = setTimeout(() => {
      setIsTyping(false);
      dispatch({
        type: `${user.type}_TYPING`,
        typing: false,
      });
    }, 1000);
  }

  const startTyping = () => {
    if (!typing) {
      setIsTyping(true);
      dispatch({
        type: `${user.type}_TYPING`,
        typing: true,
      });
    }
  }

  return (
    <div className={className}>
      <div className={`${className}--container`}>
        <button 
          onClick={() => dispatch({
            type: 'USER_TYPING',
            isTyping: true,
          })}
          className={`${className}--submit`}
        >Send</button>
        <textarea
          className={`${className}--input`}
          value={message}
          onKeyDown={e => startTyping()}
          onChange={e => onTyping(e.target.value)}
          placeholder="write your message"
        />
      </div>
    </div>
  );
}

SendMessage.defaultProps = {
  className: 'send-message',
};

export default SendMessage;