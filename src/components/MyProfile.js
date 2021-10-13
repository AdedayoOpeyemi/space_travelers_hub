import React from 'react';
import JoinedMissionsList from './JoinenMissions';
import ReservedRockets from './ReservedRockets';

const MyProfile = () => (
  <div className="container p-0">
    <div className="row m-0 p-0">
      <JoinedMissionsList />
      <ReservedRockets />
    </div>
  </div>
);

export default MyProfile;
