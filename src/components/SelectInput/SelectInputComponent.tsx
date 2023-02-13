import React from 'react'
import { getCustomizableComponentStyles } from '../../utils/styleUtils';
import styles from './SelectInput.styles.css'

export interface SelectInputComponentProps extends CustomizableComponentProps {
  children: React.ReactNode;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  small?: boolean;
}

const defaultProps = {
  placeholder: 'Click to select',
  disabled: false,
  small: false
}

const SelectInputComponent = (props: SelectInputComponentProps) => {
  return (
    <select
      id={props.id || undefined}
      name={props.name}
      onChange={props.onChange}
      disabled={props.disabled}
      placeholder={props.placeholder}
      className={`${styles.selectInput} ${props.small ? styles['selectInput-small'] : ''} ${props.className || ''}`}
      style={{
        ...getCustomizableComponentStyles(props),
        ...props.style
      }}
      {...props.tagProps}
    >
      {props.children}
    </select>
  )
}

SelectInputComponent.defaultProps = defaultProps

export default SelectInputComponent