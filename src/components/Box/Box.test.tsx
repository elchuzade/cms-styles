import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { componentPropsMock, customizableComponentPropsMock, customizableComponentPropsMockReturn } from '../../mock/mockProps'

import BoxComponent from './BoxComponent'

describe('Test Box component', () => {
  test('Check if children are being rendered when passed', () => {
    const { getByTestId } = render(<BoxComponent><div data-testid='boxChildComponent'>Rendering Box child component</div></BoxComponent>)

    expect(getByTestId('boxChildComponent')).toBeInTheDocument()
  })

  test('Check BoxComponentProps being passed and being used by the component', () => {
    const boxComponentMockProps = {
      width: 400,
      height: 200,
      alignSelf: 'center' as alignSelfProps,
      ...componentPropsMock,
      ...customizableComponentPropsMock
    }
    const { getByTestId } = render(
      <BoxComponent
        data-testid='boxComponent-testid'
        {...boxComponentMockProps}
      >
        Box Component Children
      </BoxComponent>)
    console.log(boxComponentMockProps)
    expect(getByTestId('boxComponent-testid')).toHaveClass(componentPropsMock.className)
    expect(getByTestId('boxComponent-testid')).toHaveStyle({
      width: '400px',
      height: '200px',
      'align-self': 'center',
      ...customizableComponentPropsMockReturn
    })
  })
})