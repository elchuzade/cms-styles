import React from 'react'
import styles from './FlexBox.styles.css'

export interface FlexBoxComponentProps {
  children: React.ReactNode;
  width?: number; // width in percentages in case the parent is flex
  moveRight?: boolean;
}

const FlexBoxComponent = (props: FlexBoxComponentProps) => {
  return (
    <div className={styles.flexBox}
      style={{
        width: props.width ? `${props.width}%` : '',
        marginLeft: props.moveRight ? 'auto' : 0
      }}
    >{props.children}</div>
  )
}

export default FlexBoxComponent