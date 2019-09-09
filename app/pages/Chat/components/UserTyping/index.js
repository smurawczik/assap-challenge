import React from 'react';

import './styles.scss';

const UserTyping = ({ className, from }) => {
  return (
    from && from.typing 
    ? <div className={className}>{`${from.name} is writing...`}</div>
    : null
  )
}

UserTyping.defaultProps = {
  className: 'user-typing',
}

export default UserTyping;