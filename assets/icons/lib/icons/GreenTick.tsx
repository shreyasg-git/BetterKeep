import * as React from 'react';
import * as Svg from 'react-native-svg';
export default (props?: Svg.SvgProps): React.ReactElement<Svg.SvgProps> => (
  <Svg.Svg viewBox="0 0 24 24" fill="none" {...props}>
    <Svg.Circle
      stroke="currentColor"
      fill="#3ECC79"
      r="11"
      cy="12"
      cx="12"
      tabIndex="-1"
    />
    <Svg.Path
      strokeLinejoin="round"
      strokeWidth="1.538"
      stroke="currentColor"
      fill="#fff"
      d="m9.85 14.62-2.82-2.821-.94.94L9.85 16.5l8.06-8.06-.94-.94-7.12 7.12z"
      clipRule="evenodd"
      fillRule="evenodd"
      tabIndex="-1"
    />
  </Svg.Svg>
);
