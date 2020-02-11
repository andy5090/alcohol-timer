import UserContainer from "./UserContainer";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { userActionCreator } from "../../redux/actions/userActions";

const mapStateToProps = state => {
  const { sex, weight } = state.userReducer;
  return { sex, weight };
};

const mapDispatchToProps = dispatch => {
  return {
    changeSex: bindActionCreators(userActionCreator.changeSex, dispatch),
    editWeight: bindActionCreators(userActionCreator.editWeight, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
