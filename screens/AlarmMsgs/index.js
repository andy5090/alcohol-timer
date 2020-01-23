import AlarmMsgsContainer from "./AlarmMsgsContainer";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { messageActionCreator } from "../../redux/actions/messageActions";

function mapStateToProps(state) {
  return { messages: state.messageReducer };
}

function mapDispatchToProps(dispatch) {
  return {
    addMessage: bindActionCreators(messageActionCreator.addMessage, dispatch),
    editMessage: bindActionCreators(messageActionCreator.editMessage, dispatch),
    removeMessage: bindActionCreators(
      messageActionCreator.removeMessage,
      dispatch
    ),
    removeAllMessages: bindActionCreators(
      messageActionCreator.removeAllMessages,
      dispatch
    )
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AlarmMsgsContainer);
