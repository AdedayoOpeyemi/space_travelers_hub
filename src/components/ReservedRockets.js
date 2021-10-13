import { React } from 'react';
import { useSelector } from 'react-redux';

const ReservedRockets = () => {
  const allRockets = useSelector((state) => state.rockets);

  const filteredRockets = allRockets.filter((rocket) => {
    if (rocket.reserved) {
      return rocket;
    }
    return null;
  });

  return (
    <div className="col-6 pe-0">
      <h2>My Rockets</h2>
      <ul className="list-group">
        {filteredRockets.map((rocket) => (
          <li key={rocket.id} className="list-group-item">
            <p>{rocket.rocket_name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReservedRockets;
