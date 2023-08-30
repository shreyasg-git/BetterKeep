import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function EmptyStar(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 53.867 53.867"
      xmlSpace="preserve"
      fill="#FFDF00"
      stroke="#FFDF00"
      strokeWidth={1.35}
      {...props}>
      <Path
        d="M26.934 1.318L35.256 18.182 53.867 20.887 40.4 34.013 43.579 52.549 26.934 43.798 10.288 52.549 13.467 34.013 0 20.887 18.611 18.182z"
        fill="#fff"
      />
    </Svg>
  );
}

export default EmptyStar;
