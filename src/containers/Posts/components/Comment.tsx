import React, { memo } from 'react';
import { Comment as Props } from '../../../global/types';

const Comment: React.FC<Props> = ({ body, email, name }) => {
  return (
    <div className="associated-comment">
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Body: {body}</p>
    </div>
  );
};

export default memo(Comment);
