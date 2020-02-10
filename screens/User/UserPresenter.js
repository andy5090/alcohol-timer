import React, { useState } from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";
import Loader from "../../components/Loader";
import styled from "styled-components";
import TextButton from "../../components/TextButton";
import { BG_COLOR, TINT_COLOR } from "../../constants/Colors";
import {
  TouchableWithoutFeedback,
  TextInput
} from "react-native-gesture-handler";

const Container = styled.View`
  background-color: ${BG_COLOR};
  flex: 1;
`;

const Upper = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 30px;
`;

const Middle = styled.View`
  justify-content: center;
`;

const UserText = styled.Text`
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 40;
  color: ${TINT_COLOR};
  font-size: 40;
  font-weight: 200;
`;

const UserTextInput = styled.TextInput`
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 40;
  color: ${TINT_COLOR};
  font-size: 40;
  font-weight: 200;
`;

const InfoText = styled.Text`
  padding-top: 40px;
  padding-left: 40;
  padding-right: 40;
  color: ${TINT_COLOR};
  font-size: 20;
  font-weight: 200;
`;

const UserPresenter = ({ loading, changeSex, editWeight, sex, weight }) => {
  const [editMode, setEdit] = useState(false);
  const [newWeight, setWeight] = useState("");

  const _onInput = () => {
    if (editMode) setEdit(false);
    else setEdit(true);
  };

  const _onUpdate = changedText => {
    setWeight(changedText);
  };

  const _onSave = () => {
    if (newWeight !== "") {
      editWeight(newWeight);
    }
    setEdit(false);
  };

  return loading ? (
    <Loader />
  ) : (
    <Container>
      <Upper>
        <TextButton
          name="남성"
          color={sex === "male" ? "red" : "white"}
          fontColor={sex === "male" ? "white" : BG_COLOR}
          onPress={() => changeSex("male")}
        />
        <TextButton
          name="여성"
          color={sex === "female" ? "red" : "white"}
          fontColor={sex === "female" ? "white" : BG_COLOR}
          onPress={() => changeSex("female")}
        />
      </Upper>
      <Middle>
        <TouchableWithoutFeedback onPressOut={_onInput}>
          <UserText>
            체중 :{" "}
            {editMode ? (
              <UserTextInput
                placeholder={weight}
                autoFocus={true}
                autoCorrect={false}
                onSubmitEditing={_onSave}
                onChangeText={changedText => _onUpdate(changedText)}
              />
            ) : (
              weight
            )}
            kg
          </UserText>
        </TouchableWithoutFeedback>
        <InfoText>해당 정보는 수집되지 않습니다</InfoText>
        <InfoText>위드마크 혈중알콜농도 계산 공식에 사용됩니다</InfoText>
      </Middle>
    </Container>
  );
};

UserPresenter.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default UserPresenter;
