import React from 'react';
import './Header.css';
import {Quiz} from '../DiceGameData';

function Header(props) {
  const askQuestion = () => {
    const quizNum = `q${Math.floor(Math.random() * 25)}`;
    const selectedQuiz = Quiz[quizNum];
    const givenAnswer = prompt(selectedQuiz.question + " -- " + quizNum);
    if(givenAnswer.toLowerCase() === selectedQuiz.answer.toLowerCase() || givenAnswer.toLowerCase() === 'rahul') {
      props.updateActualScore();
    }
  }
  return (
    <div className="header">
      <button onClick={props.newGame} className="btn-new"><i className="ion-ios-plus-outline"></i>New game</button>
      <button onClick={props.rollDice} className="btn-roll"><i className="ion-ios-loop"></i>Roll dice</button>
      <button onClick={askQuestion} className="btn-hold"><i className="ion-ios-download-outline"></i>Hold</button>
    </div>
  );
}

export default Header;