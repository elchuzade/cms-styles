import React from 'react'
import { getCustomizableComponentStyles } from '../../utils/styleUtils'
import styles from './Form.styles.css'

export interface FormComponentProps extends CustomizableComponentProps {
  children: React.ReactNode
  width?: number // width in percentages in case the parent is flex
  alignSelf?: string // works in case the parent is flex
}

const FormComponent = (props: FormComponentProps) => {
  return (
    <form
      id={props.id || undefined}
      className={`${styles.form} ${props.className || ''}`}
      style={{
        width: props.width ? `${props.width}%` : '',
        alignSelf: props.alignSelf || '',
        ...getCustomizableComponentStyles(props),
        ...props.style
      }}
      {...props.tagProps}
    >
      {props.children}
    </form>
  )
}

export default FormComponent