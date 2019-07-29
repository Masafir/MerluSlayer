/**
 * Initial State
 */
import Home from '../components/Home';
import Display from '../components/Display';

const initialState = {
  actual: 0,
  actualEvent: "choose",
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
const GO_TO_SCRIBE = 'GO_TO_SCRIBE';
/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // Passer de la page d'accueil au jeu
    case GO_STAGE:
      return {
        ...state,
        actual: action.stage,
      };
    // revenir à la page de choix de stage
    case GO_TO_CHOOSE:
    return {
      ...state,
      hp: initialState.hp,
      actualEvent: initialState.actualEvent,
      event: initialState.event
    }
    // aller à l'événement scribe
    case GO_TO_SCRIBE:
    return {
      ...state,
      actualEvent: "scribe",
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
export const gotoscribe = () => ({
  type: GO_TO_SCRIBE,
});

/**
 * Export
 */
export default reducer;
