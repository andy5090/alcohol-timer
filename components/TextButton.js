import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";
import { BG_COLOR } from "../constants/Colors";

const ButtonContainer = styled.View`
  background-color: ${props => props.color};
  border-radius: 100px;
`;

const ButtonText = styled.Text`
  padding: 20px;
  align-self: center;
  color: ${BG_COLOR};
  font-size: ${props => props.fontSize};
  font-weight: 200;
`;

function TextButton({ name, onPress, fontSize = 20, color = "white" }) {
  return (
    <TouchableOpacity onPressOut={onPress}>
      <ButtonContainer color={color}>
        <ButtonText fontSize={fontSize}>{name}</ButtonText>
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
