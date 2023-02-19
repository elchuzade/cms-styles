/**
 * Data that all HTML tags share
 */
export type ComponentProps = {
  id?: string
  'data-testid'?: string
  className?: string
  style?: { [className: string]: string }
  tagProps?: {
    [className: string]: string | number | boolean
  }
}

/**
 * All types that style 'align-self' can accept
 */
export type alignSelfProps = 'auto' | 'baseline' | 'center' | 'end' | 'flex-end' | 'flex-start' | 'inherit' | 'initial' | 'normal' | 'revert' | 'self-end' | 'self-start' | 'start' | 'stretch' | 'unset';

/**
 * Data that all elements whos margins and paddings can be changed share
 */
export interface CustomizableComponentProps extends ComponentProps {
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