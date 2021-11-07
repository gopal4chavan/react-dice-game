import React, {useState, useEffect} from 'react';
import './dice-game.css';
import Header from './Header/Header';
import UsersBoard from './UsersBoard/UsersBoard';
import {defaultTeamsData, teamKeys} from './DiceGameData';

function DiceGame() {
  const [tip, setTip] = useState(0);
  const [score, setScore] = useState(50);
  const [teams, setTeams] = useState({});
  
  useEffect(()=>{
    setTeams(cloneDeep(defaultTeamsData));
    setScore(prompt("pleaes enter the gamePoint") || 50);
    teamKeys.forEach(k => {
      const teamName = prompt(`Enter the ${k} name`); 
      setTeams(prevTeams => {
        const tm = prevTeams[k];
        tm.name = teamName || k;
        return{...prevTeams, [k]: tm}
      })
    })
  }, []);

  const rollDice = () => {
    const diceNum = Math.floor(Math.random() * 6 + 1);
    setTeams(prevTeams => {
      const tmName = `team${tip+1}`;
      const tm = prevTeams[tmName];
      tm.dice = diceNum;
      tm.currentScore += diceNum;
      if(diceNum === 1) {
        tm.currentScore = 0;
      }
      if(isGameOver(tm)){
        gameOver(tm);
      }
      return {...prevTeams, [tmName]:tm}
    });
    if(diceNum === 1){
      nextTip();
    }
  }

  const isGameOver = (tm) => {
    return tm.actualScore + tm.currentScore >= score;
  }

  const gameOver = (tm) => {
    alert(`Congrats ${tm.name} has won the Match`);
    newGame();
  }

  const newGame = () => {
    setTeams(cloneDeep(defaultTeamsData));
    setTip(0);
    setScore(prompt("please enter the gamePoint, for New Game"));
  }

  const cloneDeep = (obj) => {
    return JSON.parse(JSON.stringify(obj))
  }

  const nextTip = () => {
    setTip(prevTip => (prevTip + 1)%4 );
  }

  const updateActualScore = () => {
    setTeams(prevTeams => {
      const tmName = `team${tip+1}`;
      const tm = prevTeams[tmName];
      tm.actualScore = tm.currentScore;
      tm.currentScore = 0;
      if(isGameOver(tm)){
        gameOver(tm);
      }
      return {...prevTeams, [tmName]: tm}
    });
    nextTip();
  }

  const activeTeamName = () => {
    const tmName = `team${tip+1}`;
    return teams[tmName].name;
  }

  return (
    <div className="container">
      <div className="board">
        <div className='top-heading'>Game for <b>{score}</b> points</div>
        <Header rollDice={rollDice} newGame={newGame} updateActualScore={updateActualScore}/>
        <UsersBoard teams={teams} activeTeamName={activeTeamName}/>
      </div>
    </div>
  );
}

export default DiceGame;