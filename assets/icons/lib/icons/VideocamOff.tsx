import * as React from 'react';
import * as Svg from 'react-native-svg';
export default (props?: Svg.SvgProps): React.ReactElement<Svg.SvgProps> => (
  <Svg.Svg class="ionicon" viewBox="0 0 512 512" {...props}>
    <Svg.Path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="32"
      strokeLinejoin="round"
      d="M374.79 308.78L457.5 367a16 16 0 0022.5-14.62V159.62A16 16 0 00457.5 145l-82.71 58.22A16 16 0 00368 216.3v79.4a16 16 0 006.79 13.08z"
      tabIndex="-1"
    />
    <Svg.Path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="32"
      strokeMiterlimit="10"
      d="M50.19 140.57A51.94 51.94 0 0032 180v152a52.15 52.15 0 0052 52h184a51.6 51.6 0 0022-4.9M208 128h60.48A51.68 51.68 0 01320 179.52V248M416 416L80 80"
      tabIndex="-1"
    />
  </Svg.Svg>
);
