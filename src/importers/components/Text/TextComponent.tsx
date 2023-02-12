import React from 'react'
import styles from './Text.styles.css'

export interface TextComponentProps extends CustomizableComponent {
  children: React.ReactNode;
}

const TextComponent = (props: TextComponentProps) => {
  return (
    <p
      id={props.id || ''}
      className={`${styles.text} ${props.className || ''}`}
      style={{ ...props.style }}
    >
      {props.children}
    </p>
  )
}

export default TextComponent