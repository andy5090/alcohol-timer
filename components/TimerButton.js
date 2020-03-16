import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { TouchableOpacity, Platform, Image } from "react-native";
import { BG_COLOR } from "../constants/Colors";
import Layout from "../constants/Layout";

const buttonSize = Layout.defaultFontSize * 6;

const ButtonContainer = styled.View`
  background-color: ${BG_COLOR};
  border-radius: 100px;
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

function TimerButton({ iconState, onPress, size = buttonSize }) {
  return (
    <TouchableOpacity onPressOut={onPress}>
      <ButtonContainer>
        <Image
          source={
            iconState === "start"
              ? require("../assets/drinkStart.png")
              : require("../assets/drinkStop.png")
          }
          style={{
            width: size,
            height: size,
            resizeMode: "contain"
          }}
        ></Image>
      </ButtonContainer>
    </TouchableOpacity>
  );
}

TimerButton.propTypes = {
  iconState: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  size: PropTypes.number
};

export default TimerButton;
