import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import ModalDropdown from "react-native-modal-dropdown";
import TextButton from "./TextButton";

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

const DrinkSelector = ({}) => <ModalDropdown options={["Beer", "Soju"]} />;

DrinkSelector.propTypes = {};

export default DrinkSelector;
