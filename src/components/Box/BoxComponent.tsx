import React from 'react'
import { getCustomizableComponentStyles } from '../../utils/styleUtils'
import styles from './Box.styles.css'

export interface BoxComponentProps extends CustomizableComponentProps {
  children: React.ReactNode
  width?: number // width in percentages in case the parent is flex
  height?: number // height in percentages
  alignSelf?: string // works in case the parent is flex
}

const BoxComponent = (props: BoxComponentProps) => {
  return (
    <div
      id={props.id || undefined}
      className={`${styles.box} ${props.className || ''}`}
      style={{
        width: props.width ? `${props.width}%` : '',
        height: props.height || '',
        alignSelf: props.alignSelf || '',
        ...getCustomizableComponentStyles(props),
        ...props.style
      }}
      {...props.tagProps}
    >{props.children}</div>
  )
}

export default BoxComponent