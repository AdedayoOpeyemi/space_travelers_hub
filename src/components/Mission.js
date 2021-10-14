import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { joinMissions, leaveMissions } from '../redux/missions/Missions';

const Mission = (props) => {
  const { data } = props;
  const missionName = data.mission_name;
  const id = data.mission_id;
  const { description, reserved } = data;
  const dispatch = useDispatch();

  const joinMissionsButton = () => {
    dispatch(joinMissions(id));
  };

  const leaveMissionButton = () => {
    dispatch(leaveMissions(id));
  };

  return (
    <tr>
      <td className="p-2">
        <p className="fs-6 fw-bold" id="missionName">{missionName}</p>
      </td>
      <td className="p-3" id="description">
        {description}
      </td>
      <td className="p-3">
        <span className={reserved
          ? 'badge rounded-pill bg-info'
          : 'badge rounded-pill bg-secondary'}
        >
          {reserved
            ? 'ACTIVE MEMBER'
            : 'NOT A MEMBER'}
        </span>
      </td>
      <td className="p-3">
        <button
          className={reserved
            ? 'btn btn-outline-danger'
            : 'btn btn-outline-dark'}
          type="button"
          onClick={reserved
            ? leaveMissionButton
            : joinMissionsButton}
        >
          {reserved
            ? 'Leave Mission'
            : 'Join Mission'}
        </button>
      </td>
    </tr>
  );
};

Mission.propTypes = {
  data: PropTypes.shape({
    mission_id: PropTypes.string.isRequired,
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool,
  }).isRequired,
};

// missions

export default Mission;
