import React from 'react'
import styles from './SelectInput.styles.css'

export interface SelectInputComponentProps extends CustomizableComponent {
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
    >
      {props.children}
    </select>
  )
}

SelectInputComponent.defaultProps = defaultProps

export default SelectInputComponent