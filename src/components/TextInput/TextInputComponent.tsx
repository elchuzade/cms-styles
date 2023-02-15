import React from 'react'
import styles from './TextInput.styles.css'
import { getCustomizableComponentStyles } from '../../utils/styleUtils'

export interface TextInputComponentProps extends CustomizableComponentProps {
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  disabled?: boolean
  small?: boolean
  type?: 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week',
}

const defaultProps = {
  type: 'text',
  placeholder: 'type here...',
  disabled: false,
  small: false
}

const TextInputComponent = (props: TextInputComponentProps) => {
  return (
    <input
      id={props.id || undefined}
      type={props.type || 'text'}
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
      disabled={props.disabled}
      onChange={props.onChange}
      className={`${styles.textInput} ${props.small ? styles['textInput-small'] : ''} ${props.className || ''}`}
      style={{
        ...getCustomizableComponentStyles(props),
        ...props.style
      }}
      {...props.tagProps}
    />
  )
}

TextInputComponent.defaultProps = defaultProps

export default TextInputComponent