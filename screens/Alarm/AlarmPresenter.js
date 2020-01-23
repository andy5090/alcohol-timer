import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";
import styled from "styled-components";
import { BG_COLOR } from "../../constants/Colors";

const AlarmMsgContainer = styled.View`
  margin: 10px;
  flex: 3;
  background-color: black;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

const AlarmMessage = styled.Text`
  padding: 20px;
  color: white;
  font-size: 40;
  font-weight: 200;
`;

const CloseButtonContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const AdvertContainer = styled.View`
  margin: 10px;
  flex: 3;
  background-color: black;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

const Container = styled.View`
  background-color: ${BG_COLOR};
  flex: 1;
`;

const AlarmPresenter = ({
  loaded,
  elapsedTime,
  timerDuration,
  alarmOn,
  turnOffAlarm
}) =>
  loaded ? (
    <Loader />
  ) : (
    <Container>
      <AlarmMsgContainer>
        <AlarmMessage>Test Message</AlarmMessage>
      </AlarmMsgContainer>
      <CloseButtonContainer>
        <ImageButton
          iconName="window-close"
          onPress={turnOffAlarm}
          size={60}
          color={"black"}
        />
      </CloseButtonContainer>
      <AdvertContainer></AdvertContainer>
    </Container>
  );

AlarmPresenter.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default AlarmPresenter;
