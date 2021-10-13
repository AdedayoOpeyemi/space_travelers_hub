const LOAD_MISSIONS = 'SPACE_TRAVELERS/MISSIONS/LOAD_MISSIONS';
const JOIN_MISSION = 'SPACE_TRAVELERS/MISSIONS/JOIN_MISSION';
const LEAVE_MISSION = 'SPACE_TRAVELERS/MISSIONS/LEAVE_MISSION';

const initialState = [];

export const loadMissions = (payload) => ({
  type: LOAD_MISSIONS,
  payload,
});

export const joinMissions = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

export const leaveMissions = (payload) => ({
  type: LEAVE_MISSION,
  payload,
});

export const loadMissionsData = () => async (dispatch) => {
  const res = await fetch('https://api.spacexdata.com/v3/missions');
  const data = await res.json();
  dispatch(loadMissions(data));
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MISSIONS:
      return action.payload.map((mission) => (
        {
          mission_id: mission.mission_id,
          mission_name: mission.mission_name,
          description: mission.description,
        }
      ));
    case JOIN_MISSION:
      return state.map((mission) => {
        if (mission.mission_id === action.payload) {
          return { ...mission, status: true };
        }
        return mission;
      });
    case LEAVE_MISSION:
      return state.map((mission) => {
        const modificator = mission;
        if (mission.mission_id === action.payload) {
          modificator.status = false;
        }
        return modificator;
      });
    default:
      return state;
  }
};

export default reducer;
