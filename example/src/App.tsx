import React, { useState } from 'react'

import { Box, Text, Title, SideBar, TextInput, Flex, FlexBox, Button, Form, Card, Image, Modal, Accordion, SelectInput, TextareaInput } from 'cms-styles'
import 'cms-styles/dist/index.css'

const App = () => {
  const [textInput, setTextInput] = useState<string>('')
  const [selectInput, setSelectInput] = useState<string>('')
  const [modal, setModal] = useState<boolean>(false)

  return (
    <div>
      <SideBar
        // side='right'
        width={200}
        sidebar={
          <Box>
            <TextInput
              small
              ml={16}
              mt={16}
              mb={16}
              name='test'
              value={textInput}
              placeholder='...search'
              onChange={e => setTextInput(e.target.value)}
            />
            <Box pl={16}>
              <Text mb={4}>Profile</Text>
              <Text mb={4}>Network</Text>
              <Text mb={4}>Products</Text>
              <Text mb={4}>Settings</Text>
            </Box>
          </Box>
        }
        openButton={
          <Box
            pl={8} pr={8} pt={4} pb={4}
            bgColor='#26BE52'
            style={{
              borderRadius: '8px'
            }}
          >Open it</Box>
        }
        closeButton={
          <Box
            pl={8} pr={8} pt={4} pb={4}
            bgColor='#26BE52'
            style={{
              borderRadius: '8px'
            }}
          >Close it</Box>}
        content={
          <Box m={16}>
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
                  <Text>text</Text>
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
                  <Text small>text</Text>
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
            <Flex m={32}>
              <FlexBox>
                <Card m={16} p={0} width={240} height={240} cardHover>
                  <Image src='https://picsum.photos/240/140' />
                  <Box m={8}>
                    <Title mb={4}>Farida Elchuzade</Title>
                    <Text fontSize={14}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam sequi optio cupiditate.</Text>
                  </Box>
                </Card>
              </FlexBox>
              <FlexBox>
                <Card m={16} p={0} width={340}>
                  <Flex p={8} alignItems='center'>
                    <FlexBox>
                      <Image borderRound src='https://picsum.photos/40' mr={8} />
                    </FlexBox>
                    <FlexBox>
                      <Title>Kamran Elchuzade</Title>
                    </FlexBox>
                    <FlexBox moveRight>
                      <Button small color='light'>Like</Button>
                    </FlexBox>
                  </Flex>
                  <Box height={140}>
                    <Image src='https://picsum.photos/340/140' />
                  </Box>
                  <Box p={8}>
                    <Title mb={4}>Frontend Engineer</Title>
                    <Text mb={8} fontSize={14}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est aut similique fuga a possimus esse tenetur repudiandae vero deleniti corrupti?</Text>
                    <Flex>
                      <FlexBox>
                        <Button small color='purple' mr={8}>Read more</Button>
                        <Button small color='dark' mr={8}>Share</Button>
                      </FlexBox>
                      <FlexBox moveRight>
                        <Button small color='light'>Like</Button>
                      </FlexBox>
                    </Flex>
                  </Box>
                </Card>
              </FlexBox>
              <FlexBox>
                <Card m={16} p={12} width={240} style={{ backgroundColor: 'rgb(45,47,49)', color: 'white' }} cardHover>
                  <Image src='https://picsum.photos/240/140' borderRadius={8} />
                  <Box mt={4}>
                    <Title mb={4}>Farida Elchuzade</Title>
                    <Text fontSize={14}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam sequi optio cupiditate.</Text>
                  </Box>
                </Card>
              </FlexBox>
            </Flex>
            <Box m={16}>
              <Accordion
                width={400}
                children={[{
                  title: <Flex alignItems='center'><Image mr={8} src='https://picsum.photos/32?1' borderRound /><Text>Title 1</Text></Flex>,
                  content: <Box><Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, dolore?</Text></Box>,
                },
                {
                  title: <Flex alignItems='center'><Image mr={8} src='https://picsum.photos/32?2' borderRound /><Text>Title 2</Text></Flex>,
                  content: <Box><Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, dolore?</Text></Box>,
                },
                {
                  title: <Flex alignItems='center'><Image mr={8} src='https://picsum.photos/32?3' borderRound /><Text>Title 3</Text></Flex>,
                  content: <Box><Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, dolore?</Text></Box>,
                }]}
              />
            </Box>
            <Modal onClose={() => setModal(false)} opened={modal}>
              <Title mb={16}>Modal Title</Title>
              <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ex nam vel veritatis voluptates quos sequi est dolorum enim reiciendis ipsum in rerum temporibus, explicabo repellat magni, consectetur sunt voluptatibus.</Text>
              <Flex mt={16}>
                <FlexBox moveRight><Button color='green'>Save</Button></FlexBox>
              </Flex>
            </Modal>
          </Box>
        }
      />
      <Box mt={300}>footer</Box>
    </div>
  )
}

export default App
