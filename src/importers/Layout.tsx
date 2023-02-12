import React from 'react'
import BoxComponent, { BoxComponentProps } from './components/Box/BoxComponent'
import FlexComponent, { FlexComponentProps } from './components/Flex/FlexComponent'
import FlexBoxComponent, { FlexBoxComponentProps } from './components/FlexBox/FlexBoxComponent'
import ButtonComponent, { ButtonComponentProps } from './components/Button/ButtonComponent'
import TextComponent, { TextComponentProps } from './components/Text/TextComponent'
import TitleComponent, { TitleComponentProps } from './components/Title/TitleComponent'
import FormComponent, { FormComponentProps } from './components/Form/FormComponent'
import TextInputComponent, { TextInputComponentProps } from './components/TextInput/TextInputComponent'
import TextareaInputComponent, { TextareaInputComponentProps } from './components/TextareaInput/TextareaInputComponent'

export const Box = (props: BoxComponentProps) => {
  return <BoxComponent {...props} />
}

export const Flex = (props: FlexComponentProps) => {
  return <FlexComponent {...props} />
}

export const FlexBox = (props: FlexBoxComponentProps) => {
  return <FlexBoxComponent {...props} />
}

export const Button = (props: ButtonComponentProps) => {
  return <ButtonComponent {...props} />
}

export const Text = (props: TextComponentProps) => {
  return <TextComponent {...props} />
}

export const Title = (props: TitleComponentProps) => {
  return <TitleComponent {...props} />
}

export const Form = (props: FormComponentProps) => {
  return <FormComponent {...props} />
}

export const TextInput = (props: TextInputComponentProps) => {
  return <TextInputComponent {...props} />
}

export const TextareaInput = (props: TextareaInputComponentProps) => {
  return <TextareaInputComponent {...props} />
}