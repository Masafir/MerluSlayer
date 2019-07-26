/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import App from 'src/components/App';

// Action Creators
import { gotostage } from 'src/store/reducer';

const mapStateToProps = (state, ownProps) => ({
  stage: state.stages[state.actual],
  actual: state.actual,
  life: state.hp
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  gotostage: (number) => {
    dispatch(gotostage(number));
  },
});

// Container
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);


/**
 * Export
 */
export default AppContainer;
