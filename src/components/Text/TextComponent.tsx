import React from 'react'
import { getCustomizableComponentStyles } from '../../utils/styleUtils'
import styles from './Text.styles.css'

export interface TextComponentProps extends CustomizableComponentProps {
  children: React.ReactNode
  small?: boolean
  // ellipsis?: number
  fontSize?: number
}

const defaultProps = {
  small: false
}

const TextComponent = (props: TextComponentProps) => {
  return (
    <p
      data-testid={props['data-testid'] || undefined}
      id={props.id || undefined}
      className={`${styles.text} ${props.small ? styles['text-small'] : ''} ${props.className || ''}`}
      style={{
        ...getCustomizableComponentStyles(props),
        fontSize: props.fontSize || '16px',
        ...props.style
      }}
      {...props.tagProps}
    >
      {props.children}
    </p>
  )
}

TextComponent.defaultProps = defaultProps

export default TextComponent