import TimerContainer from "./TimerContainer";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { timerActionCreator } from "../../redux/actions/timerActions";

const mapStateToProps = state => {
  const {
    isPlaying,
    elapsedTime,
    timerDuration,
    alarmOn,
    targetTime
  } = state.timerReducer;

  const messages = state.messageReducer;
  return {
    isPlaying,
    elapsedTime,
    timerDuration,
    alarmOn,
    targetTime,
    messages
  };
};

const mapDispatchToProps = dispatch => {
  return {
    startTimer: bindActionCreators(timerActionCreator.startTimer, dispatch),
    restartTimer: bindActionCreators(timerActionCreator.stopTimer, dispatch),
    addSecond: bindActionCreators(timerActionCreator.addSecond, dispatch),
    plusHour: bindActionCreators(timerActionCreator.plusHour, dispatch),
    plusHalfHour: bindActionCreators(timerActionCreator.plusHalfHour, dispatch),
    setDuration: bindActionCreators(timerActionCreator.setDuration, dispatch),
    setElapsedTime: bindActionCreators(
      timerActionCreator.setElapsedTime,
      dispatch
    ),
    setTargetTime: bindActionCreators(
      timerActionCreator.setTargetTime,
      dispatch
    ),
    turnOffAlarm: bindActionCreators(timerActionCreator.turnOffAlarm, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TimerContainer);
