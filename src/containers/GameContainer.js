/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Game from '../components/GamingDisplay';

// Action Creators
import { gotochoose,gotoscribe } from 'src/store/reducer';

const mapStateToProps = (state, ownProps) => ({
  stage: state.stages[state.actual],
  evenement: state.actualEvent,
  life: state.hp
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  gotostage: (number) => {
    dispatch(gotostage(number));
  },
  gotochoose: () => {
      dispatch(gotochoose());
  },
  gotoscribe: () => {
      dispatch(gotoscribe());
  }
});

// Container
const GameContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Game);


/**
 * Export
 */
export default GameContainer;