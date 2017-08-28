export default function manageBand(state = {
  bands: [],
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
    console.log("in manageBands",{bands: [...state.bands, action.band]})
      return {bands: [...state.bands, action.band]}
    default:
      return state;
  }
};
