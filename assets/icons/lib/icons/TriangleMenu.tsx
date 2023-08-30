import * as React from 'react';
import * as Svg from 'react-native-svg';
export default (props?: Svg.SvgProps): React.ReactElement<Svg.SvgProps> => (
  <Svg.Svg class="ionicon" viewBox="0 0 512 512" {...props}>
    <Svg.Path
      fill="none"
      stroke="currentColor"
      strokeWidth="32"
      strokeMiterlimit="10"
      d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
      tabIndex="-1"
    />
    <Svg.Path
      fill="none"
      stroke="currentColor"
      strokeWidth="32"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M144 208h224M176 272h160M224 336h64"
      tabIndex="-1"
    />
  </Svg.Svg>
);
