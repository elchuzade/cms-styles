# cms-styles

A highly customizable styles library of React Components to quickly build the perfect CMS, Dashboard, Admin Panel

[![NPM](https://img.shields.io/npm/v/cms-styles.svg)](https://www.npmjs.com/package/cms-styles) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save cms-styles
```

## About the project

The goal here is to allow you, developers, to put together imported React components to build your own CMS.
Almost every component is customizable and easy to use. The dafault designs are also provided to save you some time.

## Usage

First import the styles in App.tsx, this way they will be accessible from all pages and components

```
import 'cms-styles/dist/index.css'
```
Then in any page you want to build just import the components and put them together like Lego blocks

```tsx
import React from 'react'
import { Box, Text, Button } from 'cms-styles'

const CmsPage = () => {
    return (
      <Box m={16}>
        <Text pl={32}>Text</Text>
        <Button onClick={() => { }}>Button</Button>
      </Box>
    )
}

export default CmsPage
```

## License

MIT © [elchuzade](https://github.com/elchuzade)

## All Components
- Box
- Flex
- FlexBox
- Button
- Text
- Title
- Form
- TextInput
- TextareaInput
- SelectInput
- Card
- Image
- Accordion
- Modal
- SideBar