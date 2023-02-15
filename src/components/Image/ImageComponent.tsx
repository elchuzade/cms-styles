import React from 'react'
import { getCustomizableComponentStyles } from '../../utils/styleUtils'
import styles from './Image.styles.css'

export interface ImageComponentProps extends CustomizableComponentProps {
  src: string
  width?: number // width in percentages in case the parent is flex
  height?: number // height in percentages
  alignSelf?: alignSelfProps // works in case the parent is flex
  borderRound?: boolean
  borderRadius?: number
}

const ImageComponent = (props: ImageComponentProps) => {
  return (
    <img
      id={props.id || undefined}
      className={`${styles.box} ${props.className || ''}`}
      src={props.src}
      style={{
        width: props.width ? `${props.width}%` : '',
        height: props.height || '',
        alignSelf: props.alignSelf || '',
        borderRadius: props.borderRound ? '50%' : (props.borderRadius || 0),
        ...getCustomizableComponentStyles(props),
        ...props.style
      }}
      {...props.tagProps}
    />
  )
}

export default ImageComponent