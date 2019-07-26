/**
 * Initial State
 */
import Home from '../components/Home';
import Display from '../components/Display';

const initialState = {
  actual: 0,
  stages: [
    Home,
    Display
  ],
  hp: [true,true,true],
};

/**
 * Types
 */
const GO_STAGE = 'GO_STAGE';

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GO_STAGE:
      return {
        ...state,
        actual: action.stage,
      };

    default:
      return state;
  }
};

/**
 * Action Creators
 */
export const gotostage = (stageN) => ({
  type: GO_STAGE,
  stage: stageN,
});

/**
 * Selectors
 */


/**
 * Export
 */
export default reducer;
