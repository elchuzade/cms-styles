import React from 'react'
import styles from './Box.styles.css'

export interface BoxComponentProps extends Component {
  children: React.ReactNode;
  width?: number; // width in percentages in case the parent is flex
  alignSelf?: string; // works in case the parent is flex
  m?: number; // same margin all around
  p?: number; // same padding all around
  ml?: number; // left margin in pixels
  mr?: number; // right margin in pixels
  mt?: number; // top margin in pixels
  mb?: number; // bottom margin in pixels
  pl?: number; // left padding in pixels
  pr?: number; // right padding in pixels
  pt?: number; // top padding in pixels
  pb?: number; // bottom padding in pixels
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
    >{props.children}</div>
  )
}

export default BoxComponent