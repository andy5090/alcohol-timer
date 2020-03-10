import React, { useEffect } from "react";
import { StatusBar, Modal, View } from "react-native";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";
import styled from "styled-components";
import ImageButton from "../../components/ImageButton";
import TextButton from "../../components/TextButton";
import { TINT_COLOR, BG_COLOR, ALERT_COLOR } from "../../constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { withNavigation } from "react-navigation";
import Layout from "../../constants/Layout";

const bigTextSize = Layout.defaultFontSize * 2.8;
const textSize = Layout.defaultFontSize;

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
  font-family: "Montserrat-Light";
  font-size: ${bigTextSize};
  padding-right: 20;
`;

const Lower = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TimerGradient = styled(LinearGradient)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
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
  turnOffAlarm,
  navigation
}) => {
  useEffect(() => {
    if (alarmOn) {
      navigation.navigate({ routeName: "Alarm" });
    }
  }, [alarmOn]);

  return loading ? (
    <Loader />
  ) : (
    <Container>
      <TimerGradient
        colors={[ALERT_COLOR, ALERT_COLOR, BG_COLOR]}
        start={[0, elapsedTime / timerDuration - 0.3]}
        end={[0, elapsedTime / timerDuration]}
      >
        <Upper>
          <TextButton name="+30분" onPress={plusHalfHour} />
          <TextButton name="+1시간" onPress={plusHour} />
        </Upper>
        <Middle>
          <Timer> {formatTime(timerDuration - elapsedTime)}</Timer>
        </Middle>
        <Lower>
          {!isPlaying && (
            <ImageButton
              size={120}
              iconName="play-circle"
              onPress={startTimer}
            />
          )}
          {isPlaying && (
            <ImageButton
              size={120}
              iconName="stop-circle"
              onPress={restartTimer}
            />
          )}
        </Lower>
      </TimerGradient>
    </Container>
  );
};

TimerPresenter.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default withNavigation(TimerPresenter);