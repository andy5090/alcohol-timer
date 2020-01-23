import DrinksContainer from "./DrinksContainer";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { counterActionCreator as drinksActions } from "../../redux/actions/counterActions";

const mapStateToProps = state => {
  const { drinkType } = state.counterReducer;
  return { drinkType };
};

const mapDispatchToProps = dispatch => {
  return {
    changeDrink: bindActionCreators(drinksActions.changeDrink, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrinksContainer);
