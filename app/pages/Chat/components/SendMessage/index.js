import React, { useState } from 'react';

import { useGlobalState } from '../../../../components/hooks';
import Input from '../../../../components/Input';

import { isTyping, sendMessageTo } from '../../actions';

import './styles.scss';

let typingTimeout = null;

const SendMessage = ({ className, from, to }) => {
  const typingTimeoutTime = 500;
  const [message, setMessage] = useState('');
  const [typing, setIsTyping] = useState(false);
  const [, dispatch] = useGlobalState();

  const onTyping = (value) => {
    setMessage(value);
    // small bug here, if you get to type in both inputs at the same time
    // you could get one of the "... is writing" stuck
    // this wouldn`t happen when chat is in a separate window
    setTypingTimeout();
  }

  const setTypingTimeout = () => {
    clearTimeout(typingTimeout);
    typingTimeout = setTimeout(() => {
      setIsTyping(false);
      dispatch(isTyping(from, false));
    }, typingTimeoutTime);
  }

  const startTyping = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      setTypingTimeout();
      if (message.trim()) {
        dispatch(sendMessageTo(from, to, message));
        setMessage(``);
      }
    }

    if (!typing) {
      setIsTyping(true);
      dispatch(isTyping(from, true));
    }
  }

  const submitMessage = (e) => {
    if (!message.trim()) {
      e.preventDefault();
      return;
    }

    dispatch(sendMessageTo(from, to, message));
  }

  return (
    <div className={className}>
      <div className={`${className}--container`}>
        <button 
          onClick={(e) => submitMessage(e)}
          className={`${className}--submit`}
        >Send</button>
        <Input
          className={`${className}--input`}
          value={message}
          onKeyDown={startTyping}
          onChange={onTyping}
          initialValue={message}
        />
      </div>
    </div>
  );
}

SendMessage.defaultProps = {
  className: 'send-message',
};

export default SendMessage;