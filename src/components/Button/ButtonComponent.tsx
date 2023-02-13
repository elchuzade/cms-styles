import React, { useState, useEffect } from 'react'
import { getCustomizableComponentStyles } from '../../utils/styleUtils';
import styles from './Button.styles.css'

export interface ButtonComponentProps extends CustomizableComponentProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  color?: 'blue' | 'green' | 'orange' | 'red' | 'purple' | 'dark' | 'light';
  width?: number; // width in percentages in case the parent is flex
  alignSelf?: string; // works in case the parent is flex
  small?: boolean;
}

const defaultProps = {
  small: false,
  color: 'purple'
}

const ButtonComponent = (props: ButtonComponentProps) => {
  const [buttonBackground, setButtonBackground] = useState<string>('purple')

  useEffect(() => {
    if (props.color) {
      setButtonBackground(`button-${props.color}`)
    }
  }, [])
  return (
    <button
      id={props.id || undefined}
      type={props.type || 'button'}
      onClick={props.onClick}
      className={`${styles.button} ${props.small ? styles['button-small'] : ''} ${styles[buttonBackground]} ${props.className || ''}`}
      style={{
        width: props.width ? `${props.width}%` : '',
        alignSelf: props.alignSelf || '',
        ...getCustomizableComponentStyles(props),
        ...props.style
      }}
      {...props.tagProps}
    >{props.children}</button>
  )
}

ButtonComponent.defaultProps = defaultProps;

export default ButtonComponent