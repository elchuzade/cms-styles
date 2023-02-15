import { jest } from '@jest/globals'
import * as utils from './styleUtils'

describe('Test customizable component props', () => {
  test('pass margin (m) and padding (p) and expect to see all side margins and paddings returned', () => {
    const props = {
      m: 16,
      p: 16
    }

    jest.spyOn(utils, 'getCustomizableComponentStyles')

    expect(utils.getCustomizableComponentStyles(props)).toEqual({
      marginLeft: 16,
      marginRight: 16,
      marginTop: 16,
      marginBottom: 16,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 16,
      paddingBottom: 16
    })
  })
})
