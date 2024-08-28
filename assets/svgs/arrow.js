import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    width={22}
    height={14}
    viewBox="0 0 22 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M20.6 7L21.1664 7.5664L21.7312 7L21.1664 6.4336L20.6 7ZM20.0336 6.4336L13.6336 12.8336L14.7664 13.9664L21.1664 7.5664L20.0336 6.4336ZM21.1664 6.4336L14.7664 0.0335995L13.6336 1.1664L20.0336 7.5664L21.1664 6.4336ZM20.6 6.2L0.600002 6.2L0.600002 7.8L20.6 7.8L20.6 6.2Z"
      fill="#E6D7A3"
    />
  </Svg>
);
export default SVGComponent;
