import React, { CSSProperties } from 'react';

import styles from './Button.module.scss';

interface IButton {
  text: string,
  action: () => void,
  type?: 'submit' | 'cancel';
  buttonStyles?: CSSProperties,
  textStyles?: CSSProperties
}

const Button: React.FC<IButton> = ({text, action, buttonStyles, textStyles, type = 'submit'}) => {
  return (
    <button
      onClick={action}
      style={buttonStyles}
      className={`${styles.button} ${type ==='submit' ? styles.button_sumbit : styles.button_cancel}`}
    >
      <p
        style={textStyles}
        className={styles.button_text}
      >
        {text}
      </p>
    </button>
  )
}

export default Button;