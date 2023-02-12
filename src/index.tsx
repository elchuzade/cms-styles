import React, { useState } from 'react'
import styles from './styles.module.css'
import BoxComponent, { BoxComponentProps } from './components/Box/BoxComponent'
import FlexComponent, { FlexComponentProps } from './components/Flex/FlexComponent'
import FlexBoxComponent, { FlexBoxComponentProps } from './components/FlexBox/FlexBoxComponent'
import ButtonComponent, { ButtonComponentProps } from './components/Button/ButtonComponent'
import TextComponent, { TextComponentProps } from './components/Text/TextComponent'
import TitleComponent, { TitleComponentProps } from './components/Title/TitleComponent'
import FormComponent, { FormComponentProps } from './components/Form/FormComponent'
import TextInputComponent, { TextInputComponentProps } from './components/TextInput/TextInputComponent'
import TextareaInputComponent, { TextareaInputComponentProps } from './components/TextareaInput/TextareaInputComponent'
import SelectInputComponent, { SelectInputComponentProps } from './components/SelectInput/SelectInputComponent'

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

export const SelectInput = (props: SelectInputComponentProps) => {
  return <SelectInputComponent {...props} />
}


interface Props {
  text: string
}

export const PlayGround = ({ text }: Props) => {
  const [textInput, setTextInput] = useState<string>('')
  const [selectInput, setSelectInput] = useState<string>('')

  return (
    <div className={styles.body}>
      <Flex>
        <FlexBox width={50}>
          <Button m={8} onClick={() => { }}>default</Button>
          <Button m={8} color='light' onClick={() => { }}>light</Button>
          <Button m={8} color='dark' onClick={() => { }}>dark</Button>
          <Button m={8} color='red' onClick={() => { }}>red</Button>
          <Button m={8} color='blue' onClick={() => { }}>blue</Button>
          <Button m={8} color='purple' onClick={() => { }}>purple</Button>
          <Button m={8} color='green' onClick={() => { }}>green</Button>
          <Button m={8} color='orange' onClick={() => { }}>orange</Button>
          <Button small m={8} color='light' onClick={() => { }}>light</Button>
          <Button small m={8} color='dark' onClick={() => { }}>dark</Button>
          <Button small m={8} color='red' onClick={() => { }}>red</Button>
          <Button small m={8} color='blue' onClick={() => { }}>blue</Button>
          <Button small m={8} color='purple' onClick={() => { }}>purple</Button>
          <Button small m={8} color='green' onClick={() => { }}>green</Button>
          <Button small m={8} color='orange' onClick={() => { }}>orange</Button>
        </FlexBox>
        <FlexBox width={50}>
          <Box m={20}>
            <Text>{text}</Text>
          </Box>
          <Title size={1}>this is paragraph</Title>
          <Title size={2}>this is paragraph</Title>
          <Title size={3}>this is paragraph</Title>
        </FlexBox>
        <FlexBox width={100}>
          <Form>
            <TextInput
              small
              ml={16}
              mt={16}
              mb={16}
              name='test'
              value={textInput}
              onChange={e => setTextInput(e.target.value)}
            />
            <Button small mt={8} mb={8} type='submit' color='orange' onClick={() => { }}>form button</Button>
            <TextInput
              ml={16}
              mt={16}
              mb={16}
              type='number'
              name='test'
              value={textInput}
              onChange={e => setTextInput(e.target.value)}
              tagProps={{
                required: true
              }}
            />
            <Button mt={8} mb={8} type='submit' color='orange' onClick={() => { }}>form button</Button>
            <Text small>{text}</Text>
          </Form>
        </FlexBox>
        <FlexBox>
          <TextareaInput
            ml={16}
            name='test'
            value={textInput}
            onChange={e => setTextInput(e.target.value)}
            rows={10}
          />
        </FlexBox>
      </Flex>
      <Flex>
        <FlexBox>
          <Button type='submit' color='orange' onClick={() => { }}>form button</Button>
        </FlexBox>
        <FlexBox>
          <SelectInput value={selectInput} name='selectInput' onChange={e => setSelectInput(e.target.value)}>
            <option value='qwe1'>blah1</option>
            <option value='qwe2'>blah2</option>
            <option value='qwe3'>blah3</option>
          </SelectInput>
        </FlexBox>
        <FlexBox>
          <SelectInput small value={selectInput} name='selectInput' onChange={e => setSelectInput(e.target.value)}>
            <option value='qwe1'>blah1</option>
            <option value='qwe2'>blah2</option>
            <option value='qwe3'>blah3</option>
          </SelectInput>
        </FlexBox>
      </Flex>
    </div>
  )
}
