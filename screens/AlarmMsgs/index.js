import AlarmMsgsContainer from "./AlarmMsgsContainer";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { messageActionCreator } from "../../redux/actions/messageActions";

function mapStateToProps(state) {
  return { messages: state.messageReducer };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(AlarmMsgsContainer);
