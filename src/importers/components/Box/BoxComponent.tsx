import React from 'react'
import styles from './Box.styles.css'

export interface BoxComponentProps extends CustomizableComponent {
  children: React.ReactNode;
  width?: number; // width in percentages in case the parent is flex
  alignSelf?: string; // works in case the parent is flex
}

const BoxComponent = (props: BoxComponentProps) => {
  return (
    <div
      id={props.id || ''}
      className={`${styles.box} ${props.className || ''}`}
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
    >{props.children}</div>
  )
}

export default BoxComponent