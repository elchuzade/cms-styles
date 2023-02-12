import React, { useState, useEffect } from 'react'
import styles from './Button.styles.css'

export interface ButtonComponentProps extends CustomizableComponent {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  color?: 'blue' | 'green' | 'orange' | 'red' | 'purple' | 'dark' | 'light';
  width?: number; // width in percentages in case the parent is flex
  alignSelf?: string; // works in case the parent is flex
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
      id={props.id || ''}
      type={props.type || 'button'}
      onClick={props.onClick}
      className={`${styles.button} ${styles[buttonBackground]} ${props.className || ''}`}
      style={{
        width: props.width ? `${props.width}%` : '',
        alignSelf: props.alignSelf || '',
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
    >{props.children}</button>
  )
}

export default ButtonComponent