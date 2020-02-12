import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");
const defaultFontSize = Math.floor(height / 25);

export default {
  width,
  height,
  defaultFontSize
};
