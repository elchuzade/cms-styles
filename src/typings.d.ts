/**
 * Default CSS definition for typescript,
 * will be overridden with file-specific definitions by rollup
 */
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

interface SvgrComponent extends React.StatelessComponent<React.SVGAttributes<SVGElement>> { }

declare module '*.svg' {
  const svgUrl: string;
  const svgComponent: SvgrComponent;
  export default svgUrl;
  export { svgComponent as ReactComponent }
}

interface Component {
  id?: string;
  className?: string;
  style?: { [className: string]: string }
}

interface CustomizableComponent extends Component {
  m?: number; // same margin all around
  p?: number; // same padding all around
  ml?: number; // left margin in pixels
  mr?: number; // right margin in pixels
  mt?: number; // top margin in pixels
  mb?: number; // bottom margin in pixels
  pl?: number; // left padding in pixels
  pr?: number; // right padding in pixels
  pt?: number; // top padding in pixels
  pb?: number; // bottom padding in pixels
}