import React, { useState } from "react";
import { Vibration } from "react-native";
import { Audio } from "expo-av";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";
import styled from "styled-components";
import { BG_COLOR } from "../../constants/Colors";
import ImageButton from "../../components/ImageButton";
import { withNavigation } from "react-navigation";
import { AdMobBanner } from "expo-ads-admob";

const AlarmMsgContainer = styled.View`
  margin: 5px;
  flex: 2;
  background-color: white;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

const AlarmMessage = styled.Text`
  padding: 20px;
  color: ${BG_COLOR};
  font-size: 30;
  font-weight: 200;
`;

const CloseButtonContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const AdvertContainer = styled.View`
  margin: 5px;
  flex: 4;
  background-color: white;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

const Container = styled.View`
  background-color: ${BG_COLOR};
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
    // An error occurred!
  }
};

const stopRingtone = async () => {
  try {
    await soundObject.stopAsync();
    await soundObject.unloadAsync();
  } catch (error) {
    // An error occurred!
  }
};

const AlarmPresenter = ({
  loaded,
  elapsedTime,
  timerDuration,
  alarmOn,
  messages,
  turnOffAlarm,
  navigation
}) => {
  // const [ringLoaded, setRing] = useState(false);

  if (alarmOn) {
    Vibration.vibrate(PATTERN, true);
    playRingtone();
  } else {
    Vibration.cancel();
    stopRingtone();
  }

  const randMsgIndex = Math.floor(Math.random() * messages.length);
  return loaded ? (
    <Loader />
  ) : (
    <Container>
      <AlarmMsgContainer>
        <AlarmMessage>{messages[randMsgIndex].text}</AlarmMessage>
      </AlarmMsgContainer>
      <CloseButtonContainer>
        <ImageButton
          iconName="window-close"
          onPress={() => {
            turnOffAlarm();
            navigation.goBack();
          }}
          size={60}
          color={"white"}
        />
      </CloseButtonContainer>
      <AdvertContainer>
        <AdMobBanner
          bannerSize="mediumRectangle"
          adUnitID="ca-app-pub-3940256099942544/2934735716"
          onDidFailToReceiveAdWithError={error => console.log(error)}
        />
      </AdvertContainer>
    </Container>
  );
};

AlarmPresenter.propTypes = {
  loaded: PropTypes.bool.isRequired
};

export default withNavigation(AlarmPresenter);
