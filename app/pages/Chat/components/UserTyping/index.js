import React from 'react';

import './styles.scss';

const UserTyping = ({ className, user }) => {

  console.log(user);
  return (
    <div className={className}>{user.typing ? `${user.name} esta escribiendo...` : ''}</div>
  );
}

UserTyping.defaultProps = {
  className: 'user-typing',
}

export default UserTyping;