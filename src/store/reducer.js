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
  event: {
    choose: true,
    scribe: false,
  }
};

/**
 * Types
 */
const GO_STAGE = 'GO_STAGE';
const GO_TO_CHOOSE = 'GO_TO_CHOOSE';
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
    case GO_TO_CHOOSE:
    return {
      ...state,
      hp: initialState.hp,
      event: initialState.event
    }
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
export const gotochoose = () => ({
  type: GO_TO_CHOOSE,
});

/**
 * Export
 */
export default reducer;
