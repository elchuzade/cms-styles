import React, { useState } from 'react'
import styles from './styles.module.css'
import { Box, Flex, FlexBox, Button, Text, Title, Form, TextInput, TextareaInput, SelectInput } from './importers/Layout'

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  const [textInput, setTextInput] = useState('')
  const [selectInput, setSelectInput] = useState('')

  return (
    <div className={styles.body}>
      <Flex>
        <FlexBox width={50}>
          <Button m={8} color='light' onClick={() => { }}>blah</Button>
          <Button m={8} color='dark' onClick={() => { }}>blah</Button>
          <Button m={8} color='red' onClick={() => { }}>blah</Button>
          <Button m={8} color='blue' onClick={() => { }}>blah</Button>
          <Button m={8} color='purple' onClick={() => { }}>blah</Button>
          <Button m={8} color='green' onClick={() => { }}>blah</Button>
          <Button m={8} color='orange' onClick={() => { }}>blah</Button>
          <Button small m={8} color='light' onClick={() => { }}>blah</Button>
          <Button small m={8} color='dark' onClick={() => { }}>blah</Button>
          <Button small m={8} color='red' onClick={() => { }}>blah</Button>
          <Button small m={8} color='blue' onClick={() => { }}>blah</Button>
          <Button small m={8} color='purple' onClick={() => { }}>blah</Button>
          <Button small m={8} color='green' onClick={() => { }}>blah</Button>
          <Button small m={8} color='orange' onClick={() => { }}>blah</Button>
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
