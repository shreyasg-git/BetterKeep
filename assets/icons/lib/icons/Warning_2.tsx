import * as React from 'react';
import * as Svg from 'react-native-svg';
export default (props?: Svg.SvgProps): React.ReactElement<Svg.SvgProps> => (
  <Svg.Svg
    version="1.1"
    id="Layer_1"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    xmlSpace="preserve"
    {...props}>
    <Svg.Polygon
      style="fill:#FFA418;"
      points="0,477.703 256,477.703 289.391,256 256,34.297 "
      tabIndex="-1"
      stroke="currentColor"
    />
    <Svg.Polygon
      style="fill:#FF8A1E;"
      points="256,34.297 256,477.703 512,477.703 "
      tabIndex="-1"
      stroke="currentColor"
    />
    <Svg.G tabIndex="-1" stroke="currentColor">
      <Svg.Circle
        style="fill:#324860;"
        cx="256"
        cy="405.359"
        r="16.696"
        tabIndex="-1"
        stroke="currentColor"
      />
      <Svg.Rect
        x="239.304"
        y="177.185"
        style="fill:#324860;"
        tabIndex="-1"
        stroke="currentColor"
      />
    </Svg.G>
  </Svg.Svg>
);
