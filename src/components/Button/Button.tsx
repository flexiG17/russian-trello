import React, { CSSProperties } from 'react';

import styles from './Button.module.scss';

interface IButton {
  text: string,
  action: () => void,
  buttonStyles?: CSSProperties,
  textStyles?: CSSProperties
}

const Button: React.FC<IButton> = ({text, action, buttonStyles, textStyles}) => {
  return (
    <button
      onClick={action}
      style={buttonStyles}
      className={styles.button}
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