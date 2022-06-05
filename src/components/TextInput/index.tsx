import './styles.css';

import React, { memo } from 'react';
import { ComponentPropsType } from '../../global/types';
import useLogger from '../../helpers/hooks/use-logger';

type Props = Pick<ComponentPropsType, 'message'> & {
  placeholder?: string;
  onChange: (value: string) => void;
};

const TextInput: React.FC<Props> = ({ onChange, message, placeholder }) => {
  useLogger({ message, name: 'TextInput' });
  return <input onChange={event => onChange(event.target.value)} placeholder={placeholder} />;
};

export default memo(TextInput);
