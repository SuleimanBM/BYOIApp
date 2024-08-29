import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    width={15}
    height={15}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M22.625 22.625L17.5782 17.5693L22.625 22.625ZM20.375 10.8125C20.375 13.3486 19.3675 15.7809 17.5742 17.5742C15.7809 19.3675 13.3486 20.375 10.8125 20.375C8.27637 20.375 5.84411 19.3675 4.05079 17.5742C2.25747 15.7809 1.25 13.3486 1.25 10.8125C1.25 8.27637 2.25747 5.84411 4.05079 4.05079C5.84411 2.25747 8.27637 1.25 10.8125 1.25C13.3486 1.25 15.7809 2.25747 17.5742 4.05079C19.3675 5.84411 20.375 8.27637 20.375 10.8125V10.8125Z"
      stroke="white"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SVGComponent;
