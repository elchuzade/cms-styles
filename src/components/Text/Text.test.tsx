import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { componentPropsMock, customizableComponentPropsMock } from '../../mock/mockProps'

import TextComponent from './TextComponent'

describe('Test Text component', () => {
  test('Check if children are being rendered when passed', () => {
    const { getByTestId } = render(<TextComponent><span data-testid='textChildComponent'>Rendering Text child component</span></TextComponent>)

    expect(getByTestId('textChildComponent')).toBeInTheDocument()
  })

  test('Check TextComponentProps such as styles etc. being passed and being used by the component', () => {
    const textComponentMockProps = {
      small: true,
      // ellipsis: true,
      fontSize: 24,
      ...componentPropsMock,
      ...customizableComponentPropsMock
    }
    const { getByTestId } = render(
      <TextComponent
        data-testid='textComponent-testid'
        {...textComponentMockProps}
      >
        Text Component Child
      </TextComponent>
    )

    expect(getByTestId('textComponent-testid')).toHaveClass(componentPropsMock.className)
    // expect(getByTestId('textComponent-testid')).toHaveClass('text-small')
  })
})