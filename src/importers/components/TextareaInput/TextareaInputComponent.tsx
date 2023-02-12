import React from 'react'
import styles from './TextareaInput.styles.css'

export interface TextareaInputComponentProps extends CustomizableComponent {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  small?: boolean;
  rows?: number;
  cols?: number;
}

const defaultProps = {
  placeholder: 'type here...',
  disabled: false,
  small: false,
  rows: 3,
}

const TextareaInputComponent = (props: TextareaInputComponentProps) => {
  return (
    <textarea
      id={props.id || ''}
      rows={props.rows}
      cols={props.cols}
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
      disabled={props.disabled}
      onChange={props.onChange}
      className={`${styles.textInput} ${props.small ? styles['textInput-small'] : ''} ${props.className || ''}`}
      style={{
        marginLeft: props.ml || props.m || '',
        marginRight: props.mr || props.m || '',
        marginTop: props.mt || props.m || '',
        marginBottom: props.mb || props.m || '',
        paddingLeft: props.pl || props.p || '',
        paddingRight: props.pr || props.p || '',
        paddingTop: props.pt || props.p || '',
        paddingBottom: props.pb || props.p || '',
        ...props.style
      }}
      {...props.tagProps}
    />
  )
}

TextareaInputComponent.defaultProps = defaultProps

export default TextareaInputComponent