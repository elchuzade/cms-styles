import React from 'react'
import { BoxComponentProps } from '../Box/BoxComponent'

export interface ColumnComponentProps extends BoxComponentProps {
  children: React.ReactNode;
  width?: number; // width must be represented in percentages
}

const ColumnComponent = (props: ColumnComponentProps) => {
  console.log(props)
  return (
    <div
      className='column'
      style={{
        width: props.width ? `${props.width}%` : 'auto'
      }}
    >
      {props.children}
    </div>
  )
}

export default ColumnComponent