import * as React from 'react'
// import styles from './styles.module.css'
import { Box, Flex, FlexBox, Button, Text, Title } from './importers/Layout'

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return (
    <Box>
      <Flex>
        <FlexBox width={50}>
          <Button m={8} color='light' onClick={() => { }}>blah</Button>
          <Button m={8} color='dark' onClick={() => { }}>blah</Button>
          <Button m={8} color='red' onClick={() => { }}>blah</Button>
          <Button m={8} color='blue' onClick={() => { }}>blah</Button>
          <Button m={8} color='purple' onClick={() => { }}>blah</Button>
          <Button m={8} color='green' onClick={() => { }}>blah</Button>
          <Button m={8} color='orange' onClick={() => { }}>blah</Button>
        </FlexBox>
        <FlexBox width={50}>
          <Box m={20}>
            <Text>{text}</Text>
          </Box>
          <Title size={1}>this is paragraph</Title>
          <Title size={2}>this is paragraph</Title>
          <Title size={3}>this is paragraph</Title>
        </FlexBox>
      </Flex>
    </Box>
  )
}
