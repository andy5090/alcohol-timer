import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { TouchableOpacity, Platform } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { TINT_COLOR } from "../constants/Colors";

const ButtonContainer = styled.View`
  ${Platform.select({
    ios: {
      shadowColor: "black",
      shadowOpacity: 0.2,
      shadowRadius: 5
    },
    android: {
      elevation: 10
    }
  })}
`;

function ImageButton({ iconName, onPress, size = 80, color = TINT_COLOR }) {
  return (
    <TouchableOpacity onPressOut={onPress}>
      <ButtonContainer>
        <FontAwesome name={iconName} size={size} color={color} />
      </ButtonContainer>
    </TouchableOpacity>
  );
}

ImageButton.propTypes = {
  iconName: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  size: PropTypes.number
};

export default ImageButton;
