/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
import { React, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import Rocket from './RocketItem';
import { loadRocketsData } from '../redux/rockets/rockets';

const RocketList = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  const loadRocketsAction = bindActionCreators(loadRocketsData, dispatch);

  useEffect(() => {
    if (rockets.length === 0) {
      loadRocketsAction();
    }
    return null;
  }, []);

  return (
    <div className="container-lg mt-5" id="rocket-list-container">
      {rockets.map((rocket) => (
        <Rocket key={rocket.id} data={rocket} />
      ))}
    </div>
  );
};

export default RocketList;
