import React from 'react';

import './styles.scss';

const UserTyping = ({ className, from }) => {
  return (
    <div className={className}>{from.typing ? `${from.name} is writing...` : ''}</div>
  );
}

UserTyping.defaultProps = {
  className: 'user-typing',
}

export default UserTyping;