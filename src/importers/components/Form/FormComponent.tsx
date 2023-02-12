import React from 'react'
import styles from './Form.styles.css'

export interface FormComponentProps extends CustomizableComponent {
  children: React.ReactNode;
  width?: number; // width in percentages in case the parent is flex
  alignSelf?: string; // works in case the parent is flex
}

const FormComponent = (props: FormComponentProps) => {
  return (
    <form
      id={props.id || undefined}
      className={`${styles.form} ${props.className || ''}`}
      style={{
        width: props.width ? `${props.width}%` : '',
        alignSelf: props.alignSelf || '',
        marginLeft: props.ml || props.m || '',
        marginRight: props.mr || props.m || '',
        marginTop: props.mt || props.m || '',
        marginBottom: props.mb || props.m || '',
        paddingLeft: props.pl || props.p || '',
        paddingRight: props.pr || props.p || '',
        paddingTop: props.pt || props.p || '',
        paddingBottom: props.pb || props.p || '',
        ...props.style
      }}
      {...props.tagProps}
    >
      {props.children}
    </form>
  )
}

export default FormComponent