import React from 'react';

const Input = ({ className, value, onChange, onKeyDown, placeholder }) => {

  return <input
    className={`${className}`}
    value={value}
    onKeyDown={e => onKeyDown(e)}
    onChange={e => onChange(e.target.value)}
    placeholder={placeholder}
  />;
}

Input.defaultProps = {
  className: 'input',
  placeholder: 'Write your message',
};

export default Input;