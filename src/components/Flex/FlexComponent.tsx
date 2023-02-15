import React from 'react'
import { getCustomizableComponentStyles } from '../../utils/styleUtils'
import styles from './Flex.styles.css'

export interface FlexComponentProps extends CustomizableComponentProps {
  children: React.ReactNode
  alignItems?: string // to align children positions
  justifyContent?: string // to justify children positions
}

const FlexComponent = (props: FlexComponentProps) => {
  return (
    <div
      id={props.id || undefined}
      className={`${styles.flex} ${props.className || ''}`}
      style={{
        alignItems: props.alignItems || '',
        justifyContent: props.justifyContent || '',
        ...getCustomizableComponentStyles(props),
        ...props.style
      }}
      {...props.tagProps}
    >{props.children}</div>
  )
}

export default FlexComponent