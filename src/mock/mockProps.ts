/**
 * Use this to populate random essential data to Component
 */
export const componentPropsMock = {
  id: 'some-id',
  className: 'some-className',
  style: {
    background: 'red'
  },
  tagProps: {
    'tag-prop': 'some-tag-prop'
  }
}

/**
 * Use this to populate random margins and paddings to CustomizableComponents
 */
export const customizableComponentPropsMock = {
  m: -1,
  p: -2,
  ml: 0,
  mr: 1,
  mt: 2,
  mb: 3,
  pl: 0,
  pr: 11,
  pt: 12,
  pb: 13
}

/**
 * Use this in expect().toHaveStyle() as shortcuts of margins and paddings will turn to full style key-values
 */
export const customizableComponentPropsMockReturn = {
  marginLeft: `${customizableComponentPropsMock.ml}px`,
  marginRight: `${customizableComponentPropsMock.mr}px`,
  marginTop: `${customizableComponentPropsMock.mt}px`,
  marginBottom: `${customizableComponentPropsMock.mb}px`,
  paddingLeft: `${customizableComponentPropsMock.pl}px`,
  paddingRight: `${customizableComponentPropsMock.pr}px`,
  paddingTop: `${customizableComponentPropsMock.pt}px`,
  paddingBottom: `${customizableComponentPropsMock.pb}px`
}
