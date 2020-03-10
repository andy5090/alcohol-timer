import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import styled from "styled-components";
import { BG_COLOR, TINT_COLOR } from "../constants/Colors";
import TextButton from "../components/TextButton";
import Layout from "../constants/Layout";

const textSize = Layout.defaultFontSize;

const Container = styled.View`
  background-color: ${BG_COLOR};
  flex: 1;
`;

const InfoText = styled.Text`
  padding-top: 40;
  padding-left: 40;
  padding-right: 40;
  color: ${TINT_COLOR};
  font-family: "GothicA1-Light";
  font-size: ${textSize};
`;

const Info = ({}) => (
  <Container>
    <InfoText>Version 1.0.0</InfoText>
    <InfoText>Developed by Andy Lee</InfoText>
    <InfoText>개발자 앤디리</InfoText>
  </Container>
);

Info.propTypes = {};

export default Info;
