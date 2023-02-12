import React from 'react'
import { BoxComponentProps } from '../Box/BoxComponent';
import styles from './Form.styles.css'

export interface FormComponentProps extends BoxComponentProps {
  children: React.ReactNode;
}

const FormComponent = (props: FormComponentProps) => {
  return (
    <form
      id={props.id || ''}
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
    >
      {props.children}
    </form>
  )
}

export default FormComponent