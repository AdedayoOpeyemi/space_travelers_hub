import { React, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { loadMissionsData } from '../redux/missions/Missions';
import Mission from './Mission';

const MissionsLists = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  const loadMissionsAction = bindActionCreators(loadMissionsData, dispatch);

  useEffect(() => {
    if (missions.length === 0) {
      loadMissionsAction();
    }
    return null;
  }, []);

  return (
    <div className="container">
      <table className="table table-striped table-bordered">
        <thead>
          <tr className="p-0 mx-0 my-1">
            <th scope="col">
              <p className="fs-5">Mission</p>
            </th>
            <th scope="col">
              <p className="fs-5">Description</p>
            </th>
            <th scope="col">
              <p className="fs-5">Status</p>
            </th>
            <th scope="col p-4">
              <p className="fs-5 text-white m-4">Buttons</p>
            </th>
          </tr>
        </thead>
        <tbody id="bodyTable">
          {missions.map((mission) => (
            <Mission key={mission.mission_id} data={mission} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

// missionlist

export default MissionsLists;
