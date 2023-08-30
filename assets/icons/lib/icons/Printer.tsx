import * as React from 'react';
import * as Svg from 'react-native-svg';
export default (props?: Svg.SvgProps): React.ReactElement<Svg.SvgProps> => (
  <Svg.Svg viewBox="0 0 32 32" fill="none" {...props}>
    <Svg.Rect fill="#2C49C7" tabIndex="-1" stroke="currentColor" />
    <Svg.Path
      d="M8 11.9998V2.6665H24V11.9998"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      tabIndex="-1"
    />
    <Svg.Path
      d="M8.00008 24H5.33341C4.62617 24 3.94789 23.719 3.4478 23.219C2.9477 22.7189 2.66675 22.0406 2.66675 21.3333V14.6667C2.66675 13.9594 2.9477 13.2811 3.4478 12.781C3.94789 12.281 4.62617 12 5.33341 12H26.6667C27.374 12 28.0523 12.281 28.5524 12.781C29.0525 13.2811 29.3334 13.9594 29.3334 14.6667V21.3333C29.3334 22.0406 29.0525 22.7189 28.5524 23.219C28.0523 23.719 27.374 24 26.6667 24H24.0001"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      tabIndex="-1"
    />
    <Svg.Path
      d="M24 18.6665H8V29.3332H24V18.6665Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      tabIndex="-1"
    />
  </Svg.Svg>
);
