import * as React from 'react';
import * as Svg from 'react-native-svg';
export default (props?: Svg.SvgProps): React.ReactElement<Svg.SvgProps> => (
  <Svg.Svg viewBox="0 0 16 16" fill="none" {...props}>
    <Svg.Path
      d="M7.98333 10.4503L8.7 9.73366L7.46667 8.50033H10.5V7.50033H7.46667L8.7 6.26699L7.98333 5.55032L5.53333 8.00033L7.98333 10.4503ZM3 14.0003C2.72222 14.0003 2.48611 13.9031 2.29167 13.7087C2.09722 13.5142 2 13.2781 2 13.0003V3.00033C2 2.72255 2.09722 2.48644 2.29167 2.29199C2.48611 2.09755 2.72222 2.00033 3 2.00033H6.41667C6.47222 1.61144 6.65 1.29199 6.95 1.04199C7.25 0.791992 7.6 0.666992 8 0.666992C8.4 0.666992 8.75 0.791992 9.05 1.04199C9.35 1.29199 9.52778 1.61144 9.58333 2.00033H13C13.2778 2.00033 13.5139 2.09755 13.7083 2.29199C13.9028 2.48644 14 2.72255 14 3.00033V13.0003C14 13.2781 13.9028 13.5142 13.7083 13.7087C13.5139 13.9031 13.2778 14.0003 13 14.0003H3ZM3 13.0003H13V3.00033H3V13.0003ZM8 2.71699C8.15556 2.71699 8.29167 2.65866 8.40833 2.54199C8.525 2.42533 8.58333 2.28921 8.58333 2.13366C8.58333 1.9781 8.525 1.84199 8.40833 1.72533C8.29167 1.60866 8.15556 1.55033 8 1.55033C7.84444 1.55033 7.70833 1.60866 7.59167 1.72533C7.475 1.84199 7.41667 1.9781 7.41667 2.13366C7.41667 2.28921 7.475 2.42533 7.59167 2.54199C7.70833 2.65866 7.84444 2.71699 8 2.71699ZM3 13.0003V3.00033V13.0003Z"
      fill="currentColor"
      strokeWidth="0.1"
      tabIndex="-1"
      stroke="currentColor"
    />
  </Svg.Svg>
);