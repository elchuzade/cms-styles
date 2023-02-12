import React from 'react'
import styles from './Text.styles.css'

export interface TextComponentProps extends CustomizableComponent {
  children: React.ReactNode;
  small?: boolean;
}

const defaultProps = {
  small: false
}

const TextComponent = (props: TextComponentProps) => {
  return (
    <p
      id={props.id || undefined}
      className={`${styles.text} ${props.small ? styles['text-small'] : ''} ${props.className || ''}`}
      style={{ ...props.style }}
      {...props.tagProps}
    >
      {props.children}
    </p>
  )
}

TextComponent.defaultProps = defaultProps;

export default TextComponent