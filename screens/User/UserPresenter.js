import React, { useState } from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";
import Loader from "../../components/Loader";
import styled from "styled-components";
import TextButton from "../../components/TextButton";
import { BG_COLOR, TINT_COLOR, SELECTED_COLOR } from "../../constants/Colors";
import {
  TouchableWithoutFeedback,
  TextInput
} from "react-native-gesture-handler";
import Layout from "../../constants/Layout";

const smallTextSize = Layout.defaultFontSize / 2;
const textSize = Layout.defaultFontSize;
const bigTextSize = Layout.defaultFontSize * 1.5;
const inputBoxSize = Layout.defaultFontSize * 2;
const paddingGap = Layout.defaultFontSize * 1.5;
const smallPaddingGap = Layout.defaultFontSize / 2;
const radiusSize = Layout.defaultFontSize / 2;

const Container = styled.View`
  background-color: ${BG_COLOR};
  flex: 1;
`;

const Upper = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 30px;
  flex: 1;
`;

const Middle = styled.View`
  justify-content: center;
  flex: 1;
`;

const OutlineBox = styled.View`
  background-color: ${TINT_COLOR};
  border-radius: ${radiusSize};
  margin-left: ${paddingGap}px;
  margin-right: ${paddingGap}px;
`;

const WeightContatiner = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 5px;
  background-color: ${BG_COLOR};
  border-radius: ${radiusSize / 1.2};
`;

const UserText = styled.Text`
  padding-top: ${smallPaddingGap}px;
  padding-bottom: ${smallPaddingGap}px;
  color: ${TINT_COLOR};
  font-family: "MapoDPP";
  font-size: ${bigTextSize};
`;

const WeightText = styled.Text`
  padding-top: ${smallPaddingGap}px;
  padding-bottom: ${smallPaddingGap}px;
  color: ${TINT_COLOR};
  font-family: "MapoDPP";
  font-size: ${bigTextSize};
`;

const UserTextInput = styled.TextInput`
  padding-top: ${smallPaddingGap}px;
  padding-bottom: ${smallPaddingGap}px;
  color: ${TINT_COLOR};
  font-family: "MapoDPP";
  font-size: ${bigTextSize};
  width: ${inputBoxSize};
`;

const Lower = styled.View`
  justify-content: center;
  flex: 3;
`;

const InfoText = styled.Text`
  padding-bottom: ${paddingGap};
  padding-left: ${paddingGap};
  padding-right: ${paddingGap};
  color: ${TINT_COLOR};
  font-family: "MapoGoldenPier";
  font-size: ${textSize};
`;

const SmallText = styled.Text`
  padding-left: ${paddingGap};
  color: ${TINT_COLOR};
  font-family: "MapoGoldenPier";
  font-size: ${smallTextSize};
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
          color={sex === "male" ? SELECTED_COLOR : TINT_COLOR}
          fontColor={sex === "male" ? TINT_COLOR : BG_COLOR}
          onPress={() => changeSex("male")}
        />
        <TextButton
          name="여성"
          color={sex === "female" ? SELECTED_COLOR : TINT_COLOR}
          fontColor={sex === "female" ? TINT_COLOR : BG_COLOR}
          onPress={() => changeSex("female")}
        />
      </Upper>
      <Middle>
        <SmallText> 본인의 체중을 입력해주세요</SmallText>
        <TouchableWithoutFeedback onPressOut={_onInput}>
          <OutlineBox>
            <WeightContatiner>
              <UserText>체중 : </UserText>
              {editMode ? (
                <UserTextInput
                  placeholder={weight}
                  autoFocus={true}
                  autoCorrect={false}
                  onSubmitEditing={_onSave}
                  keyboardType={"number-pad"}
                  onChangeText={changedText => _onUpdate(changedText)}
                />
              ) : (
                <WeightText>{weight}</WeightText>
              )}
              <UserText>kg</UserText>
            </WeightContatiner>
          </OutlineBox>
        </TouchableWithoutFeedback>
      </Middle>
      <Lower>
        <InfoText>해당 정보는 수집되지 않습니다</InfoText>
        <InfoText>위드마크 혈중알콜농도 계산 공식에 사용됩니다</InfoText>
      </Lower>
    </Container>
  );
};

UserPresenter.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default UserPresenter;
