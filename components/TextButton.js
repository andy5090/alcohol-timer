import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { TouchableOpacity, Platform } from "react-native";
import { BG_COLOR, TINT_COLOR } from "../constants/Colors";
import Layout from "../constants/Layout";

const radiusSize = Layout.defaultFontSize;
const paddingSize = Layout.defaultFontSize / 1.3;

const ButtonContainer = styled.View`
  background-color: ${props => props.color};
  border-radius: ${radiusSize}px;
  align-items: center;
  margin: 2px;
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

const ButtonText = styled.Text`
  padding: ${paddingSize}px;
  color: ${props => props.fontColor};
  font-family: "MapoGoldenPier";
  font-size: ${props => props.fontSize};
`;

function TextButton({
  name,
  onPress,
  fontSize = Layout.defaultFontSize,
  color = TINT_COLOR,
  fontColor = BG_COLOR
}) {
  return (
    <TouchableOpacity onPressOut={onPress}>
      <ButtonContainer color={color}>
        <ButtonText fontSize={fontSize} fontColor={fontColor}>
          {name}
        </ButtonText>
      </ButtonContainer>
    </TouchableOpacity>
  );
}

TextButton.propTypes = {
  name: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  fontSize: PropTypes.number
};

export default TextButton;
