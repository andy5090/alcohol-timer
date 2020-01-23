import React from "react";
import { StatusBar, Modal, View } from "react-native";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";
import styled from "styled-components";
import ImageButton from "../../components/ImageButton";
import TextButton from "../../components/TextButton";
import { TINT_COLOR, BG_COLOR } from "../../constants/Colors";
import { LinearGradient } from "expo-linear-gradient";

const formatTime = time => {
  let hours = 0;
  let hoursText = "00";
  if (time >= 3600) {
    hours = Math.floor(time / 3600);
    time -= hours * 3600;
  }
  if (hours < 10) {
    hoursText = `0${hours}`;
  } else {
    hoursText = `${hours}`;
  }
  let minutes = Math.floor(time / 60);
  let minutesText = "00";
  time -= minutes * 60;
  if (minutes < 10) {
    minutesText = `0${minutes}`;
  } else {
    minutesText = `${minutes}`;
  }
  let seconds = parseInt(time % 60, 10);
  let secondsText = "00";
  if (seconds < 10) {
    secondsText = `0${seconds}`;
  } else {
    secondsText = `${seconds}`;
  }
  return `${hoursText}:${minutesText}:${secondsText}`;
};

const Container = styled.View`
  background-color: ${BG_COLOR};
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

const Timer = styled.Text`
  color: ${TINT_COLOR};
  font-size: 70;
  font-weight: 200;
`;

const Lower = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TimerPresenter = ({
  loading,
  isPlaying,
  timerDuration,
  elapsedTime,
  alarmOn,
  startTimer,
  restartTimer,
  plusHour,
  plusHalfHour,
  turnOffAlarm
}) => {
  return loading ? (
    <Loader />
  ) : (
    <Container>
      <StatusBar barStyle={"light-content"} />
      <Upper>
        <TextButton name="+30min" onPress={plusHalfHour} />
        <TextButton name="+1hour" onPress={plusHour} />
      </Upper>
      <Middle>
        <Timer> {formatTime(timerDuration - elapsedTime)}</Timer>
      </Middle>
      <Lower>
        {!isPlaying && (
          <ImageButton iconName="play-circle" onPress={startTimer} />
        )}
        {isPlaying && (
          <ImageButton iconName="stop-circle" onPress={restartTimer} />
        )}
      </Lower>
    </Container>
  );
};

TimerPresenter.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default TimerPresenter;
