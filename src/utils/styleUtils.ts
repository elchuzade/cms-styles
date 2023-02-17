export type CustomizableComponentStyleProps = {
  marginLeft?: number
  marginRight?: number
  marginTop?: number
  marginBottom?: number
  paddingLeft?: number
  paddingRight?: number
  paddingTop?: number
  paddingBottom?: number
  backgroundColor?: string
}

export const getCustomizableComponentStyles = (
  props: CustomizableComponentProps
): CustomizableComponentStyleProps => {
  const style: CustomizableComponentStyleProps = {}
  // Margin
  if (props.m || props.m === 0) {
    style.marginLeft = props.m
    style.marginRight = props.m
    style.marginTop = props.m
    style.marginBottom = props.m
  }
  if (props.ml || props.ml === 0) {
    style.marginLeft = props.ml
  }
  if (props.mr || props.mr === 0) {
    style.marginRight = props.mr
  }
  if (props.mt || props.mt === 0) {
    style.marginTop = props.mt
  }
  if (props.mb || props.mb === 0) {
    style.marginBottom = props.mb
  }
  // Padding
  if (props.p || props.p === 0) {
    style.paddingLeft = props.p
    style.paddingRight = props.p
    style.paddingTop = props.p
    style.paddingBottom = props.p
  }
  if (props.pl || props.pl === 0) {
    style.paddingLeft = props.pl
  }
  if (props.pr || props.pr === 0) {
    style.paddingRight = props.pr
  }
  if (props.pt || props.pt === 0) {
    style.paddingTop = props.pt
  }
  if (props.pb || props.pb === 0) {
    style.paddingBottom = props.pb
  }
  if (props.bgColor) {
    style.backgroundColor = props.bgColor
  }
  return style
}
