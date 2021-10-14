import React from 'react';
import PropTypes from 'prop-types';
import Button from './ReserveButton';

const Rocket = (props) => {
  const { data } = props;
  const rocketName = data.rocket_name;
  const { id, description, reserved } = data;
  const { flickr_images: imageUrl } = data;

  return (
    <div className="row p-3">
      <div className="col-sm-4 col-md-3">
        <img src={imageUrl[0]} alt={rocketName} className="rocket_image" style={{ width: '100%' }} />
      </div>
      <div className="col-sm-8 col-md-9">
        <div className="rocketDetails">
          <h5 className="rocketName">{rocketName}</h5>
          <div className="rocketDesription">
            <p>
              {reserved
                ? <span className="badge rounded-pill me-3 bg-info text-white">reserved</span>
                : null}
              {description}
            </p>
            <Button id={id} reserved={reserved} />
          </div>
        </div>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  data: PropTypes.shape({
    rocket_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    flickr_images: PropTypes.instanceOf(Array),
    reserved: PropTypes.bool,
  }).isRequired,
};

export default Rocket;
