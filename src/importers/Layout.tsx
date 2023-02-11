import React from 'react'
import BoxComponent, { BoxComponentProps } from './components/BoxComponent/BoxComponent'
import FlexComponent, { FlexComponentProps } from './components/FlexComponent/FlexComponent'

export const Box = (props: BoxComponentProps) => {
  return <BoxComponent {...props} />
}

export const Flex = (props: FlexComponentProps) => {
  return <FlexComponent {...props} />
}