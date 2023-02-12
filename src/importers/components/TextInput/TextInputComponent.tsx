import React from 'react'
import styles from './TextInput.styles.css'

export interface TextInputComponentProps extends CustomizableComponent {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  type?: 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week',
}

const defaultProps = {
  type: 'text',
  placeholder: 'type here...',
  disabled: false
}

const TextInputComponent = (props: TextInputComponentProps) => {
  return (
    <input
      id={props.id || ''}
      type={props.type || 'text'}
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
      disabled={props.disabled}
      onChange={props.onChange}
      className={`${styles.textInput} ${props.className || ''}`}
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
    />
  )
}

TextInputComponent.defaultProps = defaultProps

export default TextInputComponent