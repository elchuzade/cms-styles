import React from 'react'
import { getCustomizableComponentStyles } from '../../utils/styleUtils';
import styles from './Card.styles.css'

export interface CardComponentProps extends CustomizableComponentProps {
  children: React.ReactNode;
  width?: number; // This width is given in px
  height?: number; // This width is given in px
  cardHover?: boolean;
}

const CardComponent = (props: CardComponentProps) => {
  return (
    <div
      id={props.id || undefined}
      className={`${styles.card} ${props.cardHover ? styles.cardHover : ''} ${props.className || ''}`}
      style={{
        width: props.width || '',
        height: props.height || '',
        ...getCustomizableComponentStyles(props),
        ...props.style
      }}
      {...props.tagProps}
    >
      {props.children}
    </div>
  )
}

export default CardComponent