import React, { useState } from "react";
import PropTypes from "prop-types";
import { Platform, Modal, TouchableWithoutFeedback, Alert } from "react-native";
import Loader from "../../components/Loader";
import styled from "styled-components";
import TextButton from "../../components/TextButton";
import {
  BG_COLOR,
  TINT_COLOR,
  SELECTED_COLOR,
  ALERT_COLOR
} from "../../constants/Colors";
import Layout from "../../constants/Layout";
import SelectButton from "../../components/SelectButton";
import CircleButton from "../../components/CircleButton";
import AlertModal from "../../components/AlertModal";

const midTextSize = Layout.defaultFontSize * 2;
const bigTextSize = Layout.defaultFontSize * 5;
const selectorPosX = Layout.defaultFontSize * 1.5;
const selectorPosY = Layout.defaultFontSize * 2.3;
const radiusSize = Layout.defaultFontSize;

const Container = styled.View`
  background-color: ${props =>
    props.alertState === 2 ? ALERT_COLOR : BG_COLOR};
  flex: 1;
`;

const Upper = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-around;
  align-items: center;
`;

const Middle = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Lower = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const AlcoholRate = styled.Text`
  color: ${TINT_COLOR};
  font-family: "Montserrat-Thin";
  font-size: ${midTextSize};
  font-weight: 200;
`;

const Counter = styled.Text`
  color: ${TINT_COLOR};
  font-family: "Montserrat-Light";
  font-size: ${bigTextSize};
  font-weight: 200;
`;

const PickerBox = styled.View`
  background-color: white;
  border-radius: ${radiusSize}px;
  ${Platform.select({
    ios: {
      shadowColor: "black",
      shadowOpacity: 0.2,
      shadowRadius: 5
    },
    android: {
      elevation: 10
    }
  })}
`;

const PickerContainer = styled.View`
  background-color: transparent;
  align-items: center;
  justify-content: center;
  flex: 1;
  position: absolute;
  top: ${selectorPosY};
  right: ${selectorPosX};
`;

const TouchableContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.4);
  flex-direction: row;
  justify-content: center;
  flex: 1;
`;

const CounterPresenter = ({
  loaded,
  increaseCount,
  resetCount,
  drinkCount,
  drinkId,
  changeDrink,
  drinks,
  sex,
  weight
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [alertState, setAlertState] = useState(0);

  let chosenDrink, amount, degree;

  if (drinkId === null) {
    changeDrink(drinks[0].id);
    chosenDrink = drinks[0];
    amount = parseInt(chosenDrink.amount);
    degree = parseInt(chosenDrink.degree);
  } else {
    chosenDrink = drinks.filter(drink => drink.id === drinkId).pop();
    amount = parseInt(chosenDrink.amount);
    degree = parseInt(chosenDrink.degree);
  }

  const weightP = parseInt(weight);
  const sexR = sex === "male" ? 0.86 : 0.64;
  const bac =
    Math.round(
      ((amount * drinkCount * (degree / 100) * 0.7894 * 0.7) /
        (weightP * sexR * 10)) *
        1000
    ) / 1000;

  return loaded ? (
    <Loader />
  ) : (
    <Container alertState={alertState}>
      {bac > 0 && alertState === 0 ? (
        <AlertModal
          title="안내"
          context={
            "본 앱은 혈중알콜농도 계산시 수정된 위드마크공식을 사용합니다. 또한 중간에 주종이 바뀌는 경우를 고려하지 않습니다. 위드마크공식에 의한 혈중알콜농도는 마시는 시간이 고려되지 않습니다. 계산된 수치는 실제와 차이가 있으니 주의하시기 바랍니다."
          }
          onPress={() => setAlertState(1)}
        />
      ) : null}
      {bac > 0.03 && alertState === 1 ? (
        <AlertModal
          title="경고"
          context={
            "혈중알콜농도가 음주운전 적발 기준을 넘었습니다. 음주운전은 다른 사람의 생명을 위협하는 행위가 될뿐만 아니라 본인과 가족의 불행을 야기합니다. 대중교통을 이용하여 안전 귀가하시기 바랍니다."
          }
          onPress={() => setAlertState(2)}
        />
      ) : null}
      <Modal transparent={true} visible={modalVisible}>
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <TouchableContainer>
            <PickerContainer>
              <PickerBox>
                {drinks.map(drink => (
                  <SelectButton
                    key={drink.id}
                    name={drink.name}
                    color={drink.id === drinkId ? SELECTED_COLOR : TINT_COLOR}
                    fontColor={drink.id === drinkId ? TINT_COLOR : BG_COLOR}
                    onPress={() => {
                      changeDrink(drink.id);
                      setModalVisible(false);
                    }}
                  />
                ))}
              </PickerBox>
            </PickerContainer>
          </TouchableContainer>
        </TouchableWithoutFeedback>
      </Modal>
      <Upper>
        <TextButton
          name="다마심"
          onPress={() => {
            resetCount();
            setAlertState(0);
          }}
        />
        <TextButton
          name={chosenDrink.name}
          onPress={() => {
            setModalVisible(true);
          }}
        />
      </Upper>
      <Middle>
        <AlcoholRate>{`${bac}%`}</AlcoholRate>
        <Counter>{drinkCount}</Counter>
      </Middle>
      <Lower>
        <CircleButton name="한잔더" onPress={increaseCount}></CircleButton>
      </Lower>
    </Container>
  );
};

CounterPresenter.propTypes = {
  loaded: PropTypes.bool.isRequired
};

export default CounterPresenter;
