import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";
import styled from "styled-components";
import { BG_COLOR } from "../../constants/Colors";
import DrinkButton from "../../components/DrinkButton";
import Layout from "../../constants/Layout";

const iosPadding = Layout.defaultFontSize * 4.5;

const OuterContainer = styled.View`
  background-color: ${BG_COLOR};
  flex: 1;
`;

const EmptyView = styled.View`
  height: ${iosPadding}px;
`;

const ScrollContainer = styled.ScrollView`
  padding-left: 2px;
  padding-right: 2px;
`;

const DrinksPresenter = ({ loaded, drinks, currentEdit, noticeEdit }) => {
  return loaded ? (
    <Loader />
  ) : (
    <OuterContainer>
      <KeyboardAvoidingView behavior="padding" enabled>
        <ScrollContainer>
          {drinks.map(drink => (
            <DrinkButton
              key={drink.id}
              id={drink.id}
              name={drink.name}
              amount={drink.amount}
              degree={drink.degree}
              isEditing={currentEdit === drink.id ? true : false}
              noticeEdit={noticeEdit}
            />
          ))}
          <DrinkButton
            key={"add_new"}
            id={"new"}
            name={"+ 주종 추가"}
            amount={"500"}
            degree={"5"}
            color={"#dfe6e9"}
            isEditing={currentEdit === "new" ? true : false}
            noticeEdit={noticeEdit}
          />
          {Platform.OS === "ios" ? <EmptyView></EmptyView> : null}
        </ScrollContainer>
      </KeyboardAvoidingView>
    </OuterContainer>
  );
};

DrinksPresenter.propTypes = {
  loaded: PropTypes.bool.isRequired
};

export default DrinksPresenter;
