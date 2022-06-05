import React from 'react';

type Props = {
  value: string;
  className: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<Props> = ({ value, className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
