import React from 'react';
import './User.css'
import Dice from './Dice/Dice';
function User(props) {
  return (
    <div className="user">
      <div className="name">{props.team.name}</div>
      <div className="actual-score">{props.team.actualScore}</div>
      <Dice  num={props.team.dice}/>
      <div className={`current-score ${props.activeTeamName() === props.team.name && 'active'}`}>
        <div className="label">Current Score</div>
        <div>{props.team.currentScore}</div>
      </div>
    </div>
  );
}

export default User;