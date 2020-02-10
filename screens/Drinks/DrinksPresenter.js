import React, { useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";
import styled from "styled-components";
import { BG_COLOR } from "../../constants/Colors";
import Dialog from "react-native-dialog";
import uuidv1 from "uuid/v1";
import DrinkButton from "../../components/DrinkButton";

const Container = styled.View`
  background-color: ${BG_COLOR};
  flex: 1;
`;

const DrinksPresenter = ({ loaded, drinks }) => {
  return loaded ? (
    <Loader />
  ) : (
    <Container>
      <KeyboardAvoidingView behavior="padding" enabled>
        {drinks.map(drink => (
          <DrinkButton
            key={drink.id}
            id={drink.id}
            name={drink.name}
            amount={drink.amount}
            degree={drink.degree}
          />
        ))}
        <DrinkButton
          key={"add_new"}
          id={"new"}
          name={"+ 알림 매세지 추가"}
          amount={"500"}
          degree={"5"}
          color={"#dfe6e9"}
        />
      </KeyboardAvoidingView>
    </Container>
  );
};

DrinksPresenter.propTypes = {
  loaded: PropTypes.bool.isRequired
};

export default DrinksPresenter;
