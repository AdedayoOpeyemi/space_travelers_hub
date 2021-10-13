import { React } from 'react';
import { useSelector } from 'react-redux';

const JoinedMissionsList = () => {
  const missions = useSelector((state) => state.missions);

  const filteredMissions = missions.filter((mission) => {
    if (mission.status) {
      return mission;
    }
    return null;
  });

  return (
    <div className="col-6 ps-0">
      <h2>My Missions</h2>
      <ul className="list-group">
        {filteredMissions.map((mission) => (
          <li key={mission.mission_id} className="list-group-item">
            <p>{mission.mission_name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JoinedMissionsList;
