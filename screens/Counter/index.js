import CounterContainer from "./CounterContainer";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { counterActionCreator } from "../../redux/actions/counterActions";

const mapStateToProps = state => {
  const { drinkCount, drinkId } = state.counterReducer;
  const { sex, weight } = state.userReducer;
  const drinks = state.drinkReducer;
  return { drinkCount, drinkId, drinks, sex, weight };
};

const mapDispatchToProps = dispatch => {
  return {
    increaseCount: bindActionCreators(
      counterActionCreator.increaseCount,
      dispatch
    ),
    resetCount: bindActionCreators(counterActionCreator.resetCount, dispatch),
    changeDrink: bindActionCreators(counterActionCreator.changeDrink, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
