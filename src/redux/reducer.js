const defaultState = {
  dieValue: 6,
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case "SET_DIE_TO_VALUE":
      return {
        ...state,
        dieValue: action.valueChosen,
      };
    default:
      return state;
  }
}

// Reducers must be pure functions
// (This is why the random number generation is done in the action creator
// and passed in as 'action.valueChosen', rather than in the reducer itself)
