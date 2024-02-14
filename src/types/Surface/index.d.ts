export type SurfaceRootProps = {
  /** Defines the css selector for the DOM Element of which the styles will be assigned */
  selector: string;

  /** Defines the base inline style configuration. */
  baseConfig: React.CSSProperties;

  /** Specifies a inline style configuration that will be given css `:hover` pseudo-class  */
  hoverConfig?: React.CSSProperties;

  /**
   * A content attribute defining a cryptographic nonce ("number used once") which can be used
   * by Content Security Policy to determine whether or not a given fetch will be allowed to
   * proceed for a given element.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/nonce
   */
  nonce?: () => string;
};

export type SurfaceBaseProps = {
  Root: React.JSX.IntrinsicElements['style'] & SurfaceRootProps;
};

export type SurfaceRootComponent = React.FC<SurfaceBaseProps['Root']>;
