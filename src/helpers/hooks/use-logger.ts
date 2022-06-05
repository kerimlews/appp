import { useEffect } from 'react';
import { ComponentPropsType } from '../../global/types';
import { logMessage } from '../utils';

const useLogger = ({ message, name }: ComponentPropsType) => {
  useEffect(() => {
    logMessage(message, name);
  }, [message, name]);
};

export default useLogger;
