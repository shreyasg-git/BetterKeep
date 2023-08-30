import * as React from 'react';
import * as Svg from 'react-native-svg';
export default (props?: Svg.SvgProps): React.ReactElement<Svg.SvgProps> => (
  <Svg.Svg viewBox="0 0 21 21" fill="none" {...props}>
    <Svg.Path
      d="M17.6758 12.8921C17.6758 13.3341 17.5002 13.758 17.1876 14.0706C16.8751 14.3832 16.4511 14.5588 16.0091 14.5588H6.00911L2.67578 17.8921V4.55876C2.67578 4.11673 2.85138 3.69281 3.16394 3.38025C3.4765 3.06768 3.90042 2.89209 4.34245 2.89209H16.0091C16.4511 2.89209 16.8751 3.06768 17.1876 3.38025C17.5002 3.69281 17.6758 4.11673 17.6758 4.55876V12.8921Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      tabIndex="-1"
    />
  </Svg.Svg>
);
