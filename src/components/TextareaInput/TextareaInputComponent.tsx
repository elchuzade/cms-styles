import React from 'react'
import { getCustomizableComponentStyles } from '../../utils/styleUtils'
import styles from './TextareaInput.styles.css'

export interface TextareaInputComponentProps extends CustomizableComponentProps {
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  placeholder?: string
  disabled?: boolean
  small?: boolean
  rows?: number
  cols?: number
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
      id={props.id || undefined}
      rows={props.rows}
      cols={props.cols}
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

TextareaInputComponent.defaultProps = defaultProps

export default TextareaInputComponent