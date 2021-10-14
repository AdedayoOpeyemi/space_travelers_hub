/* eslint-disable camelcase */
const LOAD_ROCKETS = 'SPACE_TRAVELERS/ROCKETS/LOAD_ROCKETS';
const RESERVE_ROCKET = 'SPACE_TRAVELERS/ROCKETS/RESERVE_ROCKETS';
const CANCEL_ROCKET = 'SPACE_TRAVELERS/ROCKETS/CANCEL_ROCKETS';

const initialState = [];

const selectFewerProps = (show) => {
  const {
    id, rocket_name, description, flickr_images,
  } = show;
  return {
    id, rocket_name, description, flickr_images,
  };
};
export const loadRockets = (payload) => ({
  type: LOAD_ROCKETS,
  payload,
});

export const reserveRockets = (payload) => ({
  type: RESERVE_ROCKET,
  payload,
});

export const cancelRockets = (payload) => ({
  type: CANCEL_ROCKET,
  payload,
});

export const loadRocketsData = () => async (dispatch) => {
  const res = await fetch('https://api.spacexdata.com/v3/rockets');
  const data = await res.json();
  const rocket_data = data.map(selectFewerProps);
  dispatch(loadRockets(rocket_data));
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ROCKETS:
      return action.payload;
    case RESERVE_ROCKET:
      return state.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: true };
      });
    case CANCEL_ROCKET:
      return state.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: false };
      });
    default: return state;
  }
};
export default reducer;
