import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";
import styled from "styled-components";
import TextButton from "../../components/TextButton";
import { TINT_COLOR, BG_COLOR, ALERT_COLOR } from "../../constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { withNavigation } from "react-navigation";
import Layout from "../../constants/Layout";
import CircleButton from "../../components/CircleButton";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import TimePicker from "react-native-modal-datetime-picker";
import * as Calendar from "expo-calendar";
import { Notifications } from "expo";
import { Platform } from "react-native";

const bigTextSize = Layout.defaultFontSize * 2.8;

const formatTime = time => {
  let hours = 0;
  let hoursText = "00";
  if (time >= 36000) {
    hours = Math.floor(time / 36000);
    time -= hours * 36000;
  }
  if (hours < 10) {
    hoursText = `0${hours}`;
  } else {
    hoursText = `${hours}`;
  }
  let minutes = Math.floor(time / 600);
  let minutesText = "00";
  time -= minutes * 600;
  if (minutes < 10) {
    minutesText = `0${minutes}`;
  } else {
    minutesText = `${minutes}`;
  }
  let seconds = parseInt(Math.floor(time / 10) % 60, 10);
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
  setDuration,
  setTargetTime,
  messages,
  navigation
}) => {
  const [myCalendar, setMyCalendar] = useState(null);
  const [alarmEventId, setAlarmEventId] = useState(null);

  useEffect(() => {
    if (myCalendar === null) {
      (async () => {
        const { status } = await Calendar.requestCalendarPermissionsAsync();
        if (status === "granted") {
          const calendars = await Calendar.getCalendarsAsync();
          setMyCalendar(calendars[0]);
        }
      })();
    }

    if (alarmOn) {
      setNewTargetTime(null);
      navigation.navigate({ routeName: "Alarm" });
    }
  });

  const [pickerShow, setPickerShow] = useState(false);
  const [selectedTargetTime, setNewTargetTime] = useState(null);

  const _onSelected = date => {
    setPickerShow(false);
    const currentTime = Date.now();
    const selectedTime = date.getTime();
    if (selectedTime > currentTime) {
      setNewTargetTime(selectedTime);
      const targetDuration = selectedTime - currentTime;
      setDuration(targetDuration);
    }
  };

  const setCalendarAlarm = async targetTime => {
    const eventId = await Calendar.createEventAsync(myCalendar.id, {
      title: `절주 타이머 알람 : ${messages[randMsgIndex].text}`,
      startDate: new Date(targetTime + 60000),
      endDate: new Date(targetTime + 120000),
      timeZone: "GMT+9",
      alarms: [{ relativeOffset: -1, method: Calendar.AlarmMethod.ALERT }]
    }).catch(error => {
      console.log("failure", error);
    });
    setAlarmEventId(eventId);
  };
  const deleteCalendarAlarm = async () => {
    await Calendar.deleteEventAsync(alarmEventId).catch(error => {
      console.log("failure", error);
    });
  };

  const _onCancel = () => {
    setPickerShow(false);
  };

  const randMsgIndex = Math.floor(Math.random() * messages.length);
  const [notiId, setNotiId] = useState(null);

  const PATTERN = [500, 250, 250, 250, 500, 250, 250, 250, 500, 250, 250, 250];

  const setNotification = async targetTime => {
    let notificationID;
    if (Platform.OS === "android") {
      await Notifications.createChannelAndroidAsync("timer-alarm", {
        name: "Alarm Notification",
        priority: "max",
        sound: true,
        vibrate: PATTERN
      });
      notificationID = await Notifications.scheduleLocalNotificationAsync(
        {
          title: "절주 타이머 알람",
          body: messages[randMsgIndex].text,
          android: {
            channelId: "timer-alarm"
          }
        },
        { time: targetTime }
      );
    } else {
      notificationID = await Notifications.scheduleLocalNotificationAsync(
        {
          title: "절주 타이머 알람",
          body: messages[randMsgIndex].text
        },
        { time: targetTime }
      );
    }
    setNotiId(notificationID);
  };

  const cancelNotification = () => {
    Notifications.cancelScheduledNotificationAsync(notiId);
  };

  return loading ? (
    <Loader />
  ) : (
    <Container>
      <TimePicker
        display="spinner"
        isVisible={pickerShow}
        mode="time"
        headerTextIOS="목표 시간"
        onConfirm={_onSelected}
        onCancel={_onCancel}
      />
      <TimerGradient
        colors={[ALERT_COLOR, ALERT_COLOR, BG_COLOR]}
        start={[0, (elapsedTime / timerDuration) * 1.2 - 0.4]}
        end={[0, (elapsedTime / timerDuration) * 1.2]}
      >
        <Upper>
          <TextButton name="+30분" onPress={plusHalfHour} />
          <TextButton name="+1시간" onPress={plusHour} />
        </Upper>
        <Middle>
          <TouchableWithoutFeedback
            onPress={() => {
              if (!isPlaying) {
                setPickerShow(true);
                setTargetTime(Date.now());
              }
            }}
          >
            <Timer> {formatTime(timerDuration - elapsedTime)}</Timer>
          </TouchableWithoutFeedback>
        </Middle>
        <Lower>
          {!isPlaying && (
            <CircleButton
              name="마시자"
              onPress={() => {
                let newTargetTime;
                if (selectedTargetTime === null) {
                  newTargetTime = Date.now() + timerDuration * 100;
                  setNewTargetTime(newTargetTime);
                } else {
                  newTargetTime = selectedTargetTime;
                }
                setTargetTime(newTargetTime);
                if (Platform.OS === "ios") {
                  setCalendarAlarm(newTargetTime);
                }
                setNotification(newTargetTime);
                startTimer();
              }}
            />
          )}
          {isPlaying && (
            <CircleButton
              name="그만"
              onPress={() => {
                setNewTargetTime(null);
                if (Platform.OS === "ios") {
                  deleteCalendarAlarm();
                }
                cancelNotification();
                restartTimer();
              }}
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
