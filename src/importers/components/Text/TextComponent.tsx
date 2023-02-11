import React from 'react'
import styles from './Text.styles.css'

export interface TextComponentProps {
  children: React.ReactNode;
}

const TextComponent = (props: TextComponentProps) => {
  return (
    <p className={styles.text}>
      {props.children}
    </p>
  )
}

export default TextComponent