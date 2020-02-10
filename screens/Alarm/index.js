import AlarmContainer from "./AlarmContainer";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { timerActionCreator } from "../../redux/actions/timerActions";

const mapStateToProps = state => {
  const { elapsedTime, timerDuration, alarmOn } = state.timerReducer;
  const messages = state.messageReducer;
  return {
    elapsedTime,
    timerDuration,
    alarmOn,
    messages
  };
};

const mapDispatchToProps = dispatch => {
  return {
    turnOffAlarm: bindActionCreators(timerActionCreator.turnOffAlarm, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlarmContainer);
