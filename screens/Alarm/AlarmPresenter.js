import React from "react";
import { Vibration } from "react-native";
import { Audio } from "expo-av";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";
import styled from "styled-components";
import { BG_COLOR, INACTIVE_COLOR } from "../../constants/Colors";
import ImageButton from "../../components/ImageButton";
import { withNavigation } from "react-navigation";
import { AdMobBanner } from "expo-ads-admob";
import Layout from "../../constants/Layout";

const bigTextSize = Layout.defaultFontSize * 2;
const buttonSize = Layout.defaultFontSize;
const paddingSize = Layout.defaultFontSize * 1.5;

const AlarmMsgContainer = styled.View`
  margin: 4px;
  background-color: white;
  border-radius: ${buttonSize}px;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const AlarmMessage = styled.Text`
  padding: ${paddingSize}px;
  color: ${BG_COLOR};
  font-family: "BlackHanSans-Regular";
  font-size: ${bigTextSize};
`;

const CloseButtonContainer = styled.View`
  position: absolute;
  top: 0;
  right: 0;
`;

const AdvertContainer = styled.View`
  padding: 5px;
  padding-top: ${buttonSize}px;
  background-color: white;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

const Container = styled.View`
  background-color: ${BG_COLOR};
  padding: ${paddingSize}px;
  flex: 1;
`;

const PATTERN = [1000, 1000, 1000];
const soundObject = new Audio.Sound();

const playRingtone = async () => {
  try {
    await soundObject.loadAsync(
      require("../../assets/Twin-bell-alarm-clock-sound.mp3")
    );
    await soundObject.setIsLoopingAsync(true);
    await soundObject.playAsync();
  } catch (error) {
    console.log(error);
  }
};

const stopRingtone = async () => {
  try {
    await soundObject.stopAsync();
    await soundObject.unloadAsync();
  } catch (error) {
    console.log(error);
  }
};

const AlarmPresenter = ({
  loading,
  elapsedTime,
  timerDuration,
  alarmOn,
  messages,
  turnOffAlarm,
  navigation
}) => {
  if (alarmOn) {
    Vibration.vibrate(PATTERN, true);
    playRingtone();
  } else {
    Vibration.cancel();
    stopRingtone();
  }

  const randMsgIndex = Math.floor(Math.random() * messages.length);

  return loading ? (
    <Loader />
  ) : (
    <Container>
      <AlarmMsgContainer>
        <AlarmMessage>{messages[randMsgIndex].text}</AlarmMessage>
      </AlarmMsgContainer>
      <AdvertContainer>
        <CloseButtonContainer>
          <ImageButton
            iconName="window-close"
            onPress={() => {
              turnOffAlarm();
              navigation.goBack();
            }}
            size={buttonSize}
            color={INACTIVE_COLOR}
          />
        </CloseButtonContainer>
        <AdMobBanner
          bannerSize="mediumRectangle"
          adUnitID="ca-app-pub-3940256099942544/6300978111"
          onDidFailToReceiveAdWithError={error => console.log(error)}
        />
      </AdvertContainer>
    </Container>
  );
};

AlarmPresenter.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default withNavigation(AlarmPresenter);
