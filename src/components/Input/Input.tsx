import React, { ChangeEvent, InputHTMLAttributes } from 'react';

import styles from './Input.module.scss';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  value: string,
  action: (e: ChangeEvent<HTMLInputElement>) => void,
}

const Input: React.FC<IInput> = ({ value, action, ...otherProps }) => {

  return (
    <input
      type="text"
      value={value}
      onChange={action}
      className={styles.input}
      {...otherProps}
    />
  )
}

export default Input;