import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";
import { BG_COLOR } from "../constants/Colors";
import Layout from "../constants/Layout";

const ButtonContainer = styled.View`
  background-color: ${props => props.color};
  border-radius: 20px;
  margin: 1px;
`;

const ButtonText = styled.Text`
  padding: 20px;
  align-self: center;
  color: ${props => props.fontColor};
  font-size: ${props => props.fontSize};
  font-weight: 200;
`;

function TextButton({
  name,
  onPress,
  fontSize = Layout.defaultFontSize,
  color = "white",
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
