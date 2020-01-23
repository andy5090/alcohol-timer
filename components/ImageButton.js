import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

function ImageButton({ iconName, onPress, size = 80, color = "white" }) {
  return (
    <TouchableOpacity onPressOut={onPress}>
      <FontAwesome name={iconName} size={size} color={color} />
    </TouchableOpacity>
  );
}

ImageButton.propTypes = {
  iconName: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  size: PropTypes.number
};

export default ImageButton;
