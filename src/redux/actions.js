// These functions are the action creators.
// They create 'actions' which are plain objects

export function rollTheDie() {
  return { type: "SET_DIE_TO_VALUE", valueChosen: randomIntFromInterval(1, 6) };
}

export function setDieToValue(valueChosen) {
  return { type: "SET_DIE_TO_VALUE", valueChosen: valueChosen };
}

//Utility function. Not an action creator
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
