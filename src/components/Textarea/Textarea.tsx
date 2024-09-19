import React, {ChangeEvent, TextareaHTMLAttributes} from 'react';

import styles from './Textarea.module.scss';
import inputStyles from '../Input/Input.module.scss';

interface ITextarea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  value: string,
  action: (e: ChangeEvent<HTMLTextAreaElement>) => void,
}

const Textarea: React.FC<ITextarea> = ({value, action, ...otherProps}) => {
  return (
    <textarea
      className={`${inputStyles.input} ${styles.textarea}`}
      style={{resize: 'none'}}
      value={value}
      onChange={action}
      rows={4}
      {...otherProps}
    />
  )
}

export default Textarea;