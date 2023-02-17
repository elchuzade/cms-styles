/**
 * Default CSS definition for typescript,
 * will be overridden with file-specific definitions by rollup
 */
declare module '*.css' {
  const content: { [className: string]: string }
  export default content
}

interface SvgrComponent { }

declare module '*.svg' {
  const svgUrl: string
  const svgComponent: SvgrComponent
  export default svgUrl
  export { svgComponent as ReactComponent }
}

/**
 * Data that all HTML tags share
 */
interface ComponentProps {
  id?: string
  'data-testid'?: string
  className?: string
  style?: { [className: string]: string }
  tagProps?: { [className: string]: string | number | boolean }
}

/**
 * All types that style 'align-self' can accept
 */
type alignSelfProps = 'auto' | 'baseline' | 'center' | 'end' | 'flex-end' | 'flex-start' | 'inherit' | 'initial' | 'normal' | 'revert' | 'self-end' | 'self-start' | 'start' | 'stretch' | 'unset'

/**
 * Data that all elements whos margins and paddings can be changed share
 */
interface CustomizableComponentProps extends ComponentProps {
  m?: number // same margin all around
  p?: number // same padding all around
  ml?: number // left margin in pixels
  mr?: number // right margin in pixels
  mt?: number // top margin in pixels
  mb?: number // bottom margin in pixels
  pl?: number // left padding in pixels
  pr?: number // right padding in pixels
  pt?: number // top padding in pixels
  pb?: number // bottom padding in pixels
  bgColor?: string; // background color hex, rgb, rgba
}