/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { reserveRockets, cancelRockets } from '../redux/rockets/rockets';

function ReserveButton(props) {
  return (
    <button type="button" className="btn btn-primary" onClick={props.onClick}>
      Reserve Rocket
    </button>
  );
}

function CancelButton(props) {
  return (
    <button type="button" className="btn btn-outline-secondary" onClick={props.onClick}>
      Cancel Reservation
    </button>
  );
}

const Button = (props) => {
  const dispatch = useDispatch();
  const { id, reserved } = props;

  const reserveClick = (id) => {
    dispatch(reserveRockets(id));
  };

  const cancelClick = (rocketid) => {
    dispatch(cancelRockets(rocketid));
  };

  let button;
  if (reserved) {
    button = <CancelButton onClick={() => cancelClick(id)} />;
  } else {
    button = <ReserveButton onClick={() => reserveClick(id)} />;
  }

  return (
    <div>
      {button}
    </div>
  );
};

export default Button;
