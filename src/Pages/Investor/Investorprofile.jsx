import React from 'react';

const Investorprofile = ({ investor }) => {
  return (
    <div className="investor-profile">
      <img src={investor.profilePicture} alt={`${investor.name}'s profile picture`} className="profile-picture" />
      <div className="info">
        <h2>{investor.name}</h2>
        <p>{investor.description}</p>
      </div>
    </div>
  );
};

export default Investorprofile;