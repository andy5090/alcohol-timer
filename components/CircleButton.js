import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { TouchableOpacity, Platform } from "react-native";
import { BG_COLOR, TINT_COLOR } from "../constants/Colors";
import Layout from "../constants/Layout";

const buttonSize = Layout.defaultFontSize * 5;
const textSize = Layout.defaultFontSize * 1.3;

const ButtonContainer = styled.View`
  background-color: ${props => props.color};
  border-radius: ${buttonSize / 2};
  width: ${buttonSize}px;
  height: ${buttonSize}px;
  justify-content: center;
  align-items: center;
  ${Platform.select({
    ios: {
      shadowColor: "black",
      shadowOpacity: 0.2,
      shadowRadius: 5
    },
    android: {
      elevation: 10
    }
  })};
`;

const ButtonText = styled.Text`
  color: ${props => props.fontColor};
  font-family: "MapoGoldenPier";
  font-size: ${props => props.fontSize};
`;

function CircleButton({
  name,
  onPress,
  fontSize = textSize,
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

CircleButton.propTypes = {
  name: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  size: PropTypes.number
};

export default CircleButton;
