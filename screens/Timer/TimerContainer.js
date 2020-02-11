import React from "react";
import TimerPresenter from "./TimerPresenter";

export default class TimerContainer extends React.Component {
  state = {
    loading: false,
    error: null
  };

  componentDidUpdate(prevProps) {
    const currentProps = this.props;
    if (currentProps.isPlaying && !prevProps.isPlaying) {
      const timerInterval = setInterval(() => {
        currentProps.addSecond();
      }, 1000);
      this.setState({
        timerInterval
      });
    } else if (!currentProps.isPlaying && prevProps.isPlaying) {
      clearInterval(this.state.timerInterval);
    }
  }

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
      turnOffAlarm
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
        turnOffAlarm={turnOffAlarm}
      />
    );
  }
}
