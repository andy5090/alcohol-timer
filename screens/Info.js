import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import styled from "styled-components";
import { BG_COLOR } from "../constants/Colors";
import TextButton from "../components/TextButton";

const Container = styled.View`
  background-color: ${BG_COLOR};
  flex: 1;
`;

const Info = ({}) => (
  <Container>
    <Text>Developed by Andy Lee</Text>
  </Container>
);

Info.propTypes = {};

export default Info;
