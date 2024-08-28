import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    width={30}
    height={25}
    viewBox="0 0 21 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M1 11V17.967C1 20.277 3.534 21.736 5.597 20.615L8.8 18.873M1 7V4.033C1 1.723 3.534 0.264002 5.597 1.385L18.409 8.353C18.8893 8.60841 19.291 8.98969 19.5712 9.45599C19.8514 9.92228 19.9994 10.456 19.9994 11C19.9994 11.544 19.8514 12.0777 19.5712 12.544C19.291 13.0103 18.8893 13.3916 18.409 13.647L12.003 17.131"
      stroke="#E6D7A3"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </Svg>
);
export default SVGComponent;
