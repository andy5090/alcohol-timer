import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { TouchableOpacity, Platform, Modal } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { TINT_COLOR, BG_COLOR, ALERT_COLOR } from "../constants/Colors";
import Layout from "../constants/Layout";

const radiusSize = Layout.defaultFontSize;
const paddingSize = Layout.defaultFontSize;
const textSize = Layout.defaultFontSize / 1.3;
const bigTextSize = Layout.defaultFontSize;

const AlertContainer = styled.View`
  margin: 10px;
  background-color: ${TINT_COLOR};
  border-radius: ${radiusSize}px;
  justify-content: center;
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

const TitleText = styled.Text`
  padding: ${paddingSize}px;
  padding-bottom: 0;
  color: ${ALERT_COLOR};
  font-family: "BlackHanSans-Regular";
  font-size: ${bigTextSize};
`;

const InfoText = styled.Text`
  padding: ${paddingSize}px;
  color: ${BG_COLOR};
  font-family: "MapoGoldenPier";
  font-size: ${textSize};
`;

const ConfirmText = styled.Text`
  padding: ${paddingSize}px;
  padding-top: 0;
  color: ${ALERT_COLOR};
  font-family: "MapoGoldenPier";
  font-size: ${bigTextSize};
  align-self: center;
`;

function AlertModal({ title, context, visible, onPress }) {
  return (
    <Modal transparent={true} visible={true}>
      <AlertContainer>
        <TitleText>{title}</TitleText>
        <InfoText>{context}</InfoText>
        <TouchableOpacity onPress={onPress}>
          <ConfirmText>확인</ConfirmText>
        </TouchableOpacity>
      </AlertContainer>
    </Modal>
  );
}

AlertModal.propTypes = {
  title: PropTypes.string.isRequired,
  context: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

export default AlertModal;
