import DrinksContainer from "./DrinksContainer";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { drinkActionCreator } from "../../redux/actions/drinkActions";

const mapStateToProps = state => {
  const drinks = state.drinkReducer;
  return { drinks };
};

const mapDispatchToProps = dispatch => {
  return {
    addDrink: bindActionCreators(drinkActionCreator.addDrink, dispatch),
    editDrink: bindActionCreators(drinkActionCreator.editDrink, dispatch),
    removeDrink: bindActionCreators(drinkActionCreator.removeDrink, dispatch),
    removeAllDrinks: bindActionCreators(
      drinkActionCreator.removeAllDrinks,
      dispatch
    )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrinksContainer);
