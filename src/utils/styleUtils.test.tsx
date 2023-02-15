import { jest } from '@jest/globals'
import * as utils from './styleUtils'

describe('Test customizable component props', () => {
  test('pass margin (m) and padding (p) and expect to see all side margins and paddings returned', () => {
    const props = { m: 16, p: 16 }
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

    jest.restoreAllMocks()
  })

  test('pass side margins (ml, mr, mt, mb) and side paddings (pl, pr, pt, pb) and expect margins and paddings returned', () => {
    const props = { ml: 1, mr: 2, mt: 3, mb: 4, pl: 11, pr: 12, pt: 13, pb: 14 }
    jest.spyOn(utils, 'getCustomizableComponentStyles')

    expect(utils.getCustomizableComponentStyles(props)).toEqual({
      marginLeft: 1,
      marginRight: 2,
      marginTop: 3,
      marginBottom: 4,
      paddingLeft: 11,
      paddingRight: 12,
      paddingTop: 13,
      paddingBottom: 14
    })

    jest.restoreAllMocks()
  })

  test('pass zeros for margin (m) and padding (p) and expect them to be returned', () => {
    const props = { m: 0, p: 0 }
    jest.spyOn(utils, 'getCustomizableComponentStyles')

    expect(utils.getCustomizableComponentStyles(props)).toEqual({
      marginLeft: 0,
      marginRight: 0,
      marginTop: 0,
      marginBottom: 0,
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 0,
      paddingBottom: 0
    })

    jest.restoreAllMocks()
  })

  test('pass zeros for side margins (ml, mr, mt, mb) and side paddings (pl, pr, pt, pb) and expect them to be returned', () => {
    const props = { ml: 0, mr: 0, mt: 0, mb: 0, pl: 0, pr: 0, pt: 0, pb: 0 }
    jest.spyOn(utils, 'getCustomizableComponentStyles')

    expect(utils.getCustomizableComponentStyles(props)).toEqual({
      marginLeft: 0,
      marginRight: 0,
      marginTop: 0,
      marginBottom: 0,
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 0,
      paddingBottom: 0
    })

    jest.restoreAllMocks()
  })

  test('pass side margins and normal margins as well as side paddings and normal paddings and expect side margins and paddings to override normal margins and paddings and be returned', () => {
    const props = { m: 12, ml: 1, mb: 0, p: 8, pr: 3, pt: 0 }
    jest.spyOn(utils, 'getCustomizableComponentStyles')

    expect(utils.getCustomizableComponentStyles(props)).toEqual({
      marginLeft: 1,
      marginRight: 12,
      marginTop: 12,
      marginBottom: 0,
      paddingLeft: 8,
      paddingRight: 3,
      paddingTop: 0,
      paddingBottom: 8
    })

    jest.restoreAllMocks()
  })
})
