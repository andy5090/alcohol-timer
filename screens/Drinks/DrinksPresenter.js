import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";
import styled from "styled-components";
import { BG_COLOR } from "../../constants/Colors";
import TextButton from "../../components/TextButton";

const Container = styled.View`
  background-color: ${BG_COLOR};
  flex: 1;
`;

const DrinksPresenter = ({ loaded, changeDrink, drinkType }) =>
  loaded ? (
    <Loader />
  ) : (
    <Container>
      <Text>Drinks</Text>
      <TextButton name="Add a Drink" onPress={changeDrink} />
    </Container>
  );

DrinksPresenter.propTypes = {
  loaded: PropTypes.bool.isRequired
};

export default DrinksPresenter;
