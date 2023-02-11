import React from 'react'
import styles from './Flex.styles.css'
import { BoxComponentProps } from '../BoxComponent/BoxComponent'

export interface FlexComponentProps extends BoxComponentProps {
  children: React.ReactNode;
  alignItems?: string; // to align children positions
  justifyContent?: string; // to justify children positions
}

const FlexComponent = (props: FlexComponentProps) => {
  return (
    <div className={styles.flex}
      style={{
        alignItems: props.alignItems || '',
        justifyContent: props.justifyContent || '',
        marginLeft: props.ml || props.m || '',
        marginRight: props.mr || props.m || '',
        marginTop: props.mt || props.m || '',
        marginBottom: props.mb || props.m || '',
        paddingLeft: props.pl || props.p || '',
        paddingRight: props.pr || props.p || '',
        paddingTop: props.pt || props.p || '',
        paddingBottom: props.pb || props.p || ''
      }}
    >{props.children}</div>
  )
}

export default FlexComponent