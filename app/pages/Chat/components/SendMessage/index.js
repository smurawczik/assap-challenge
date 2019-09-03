import React, { useState } from 'react';
import { useGlobalState } from '../../../../components/hooks';

import './styles.scss';

const SendMessage = ({ className }) => {
  const [message, setMessage] = useState('');
  const [, dispatch] = useGlobalState();

  return (
    <div className={className}>
      <input
        className={`${className}--input`}
        value={message}
        onChange={e => setMessage(e.target.value)}
        placeholder="write your message"
      />
      <button 
        onClick={() => dispatch({
          type: 'USER_TYPING',
          isTyping: true,
        })}
        className={`${className}--submit`}
      >Send</button>
    </div>
  );
}

SendMessage.defaultProps = {
  className: 'send-message',
};

export default SendMessage;