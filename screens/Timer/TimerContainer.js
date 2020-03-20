import React from "react";
import { AppState } from "react-native";
import TimerPresenter from "./TimerPresenter";

export default class TimerContainer extends React.Component {
  state = {
    loading: false,
    error: null,
    appState: AppState.currentState
  };

  componentDidMount() {
    AppState.addEventListener("change", this._handleAppStateChange);
  }

  componentDidUpdate(prevProps) {
    const currentProps = this.props;
    if (currentProps.isPlaying && !prevProps.isPlaying) {
      const timerInterval = setInterval(() => {
        currentProps.addSecond();
      }, 100);
      this.setState({
        timerInterval
      });
    } else if (!currentProps.isPlaying && prevProps.isPlaying) {
      clearInterval(this.state.timerInterval);
    }
  }

  componentWillUnmount() {
    AppState.removeEventListener("change", this._handleAppStateChange);
  }

  _handleAppStateChange = nextAppState => {
    const { isPlaying, timerDuration, targetTime, setElapsedTime } = this.props;
    if (
      this.state.appState.match(/inactive|background/) &&
      nextAppState === "active"
    ) {
      if (isPlaying) {
        const currentTime = Date.now();
        if (currentTime < targetTime) {
          const newElapsedTime =
            (timerDuration * 100 - (targetTime - currentTime)) / 100;
          setElapsedTime(newElapsedTime);
        } else {
          setElapsedTime(timerDuration);
        }
      }
    }
    this.setState({ appState: nextAppState });
  };

  render() {
    const { loading } = this.state;
    const {
      isPlaying,
      elapsedTime,
      timerDuration,
      alarmOn,
      startTimer,
      restartTimer,
      plusHour,
      plusHalfHour,
      setDuration,
      setTargetTime,
      messages
    } = this.props;
    return (
      <TimerPresenter
        loading={loading}
        isPlaying={isPlaying}
        timerDuration={timerDuration}
        elapsedTime={elapsedTime}
        alarmOn={alarmOn}
        startTimer={startTimer}
        restartTimer={restartTimer}
        plusHour={plusHour}
        plusHalfHour={plusHalfHour}
        setDuration={setDuration}
        setTargetTime={setTargetTime}
        messages={messages}
      />
    );
  }
}
