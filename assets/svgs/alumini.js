import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    width={40}
    height={35}
    viewBox="0 0 27 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M24.75 11.25V18M24.75 11.25L13.5 5.625L2.25 11.25L13.5 16.875L24.75 11.25Z"
      stroke="#E6D7A3"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6.75 13.5V19.125C10.125 22.5 16.875 22.5 20.25 19.125V13.5"
      stroke="#E6D7A3"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SVGComponent;
