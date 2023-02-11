import * as React from 'react'
import styles from './styles.module.css'
import { Box, Flex } from './importers/Layout'

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return (
    <Box m={8} p={8}>
      <Flex>
        <Box id='test' style={{ backgroundColor: 'red' }} className='blah blah' width={20} m={8} ml={16} mr={16}><div className={styles.test}>Example Component 2: {text}</div></Box>
        <Box width={30} m={8} ml={16} mr={16}><div className={styles.test}>Example Component 2: {text}</div></Box>
      </Flex>
    </Box>
  )
}
