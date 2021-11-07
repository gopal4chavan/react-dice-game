import React, { useEffect, useState } from 'react';
import './dice.css'
function DiceNum(props) {
  const [anime, setAnime] = useState('');
  let customStyle = {};

  useEffect(()=>{
    setAnime('dice-anime');
    setTimeout(()=>setAnime(''),1000);
  },[props.num]);

  const updateCustomStyle = (index) => {
    if(props.num === 5 && index === 2 || props.num === 3){
      customStyle = {flex: '100%'}
    }else{
      customStyle = {}
    }
  }

  const dots = new Array(props.num).fill(0).map((_, ind) => {
    updateCustomStyle(ind);
    return (
      <div className="dot-back" style={customStyle}>
        <div className='dot'></div>
      </div>
    );
  });
  return (
    <div className="dice-back">
      <div className={`dice ${anime}`}>{dots}</div>
    </div>
  )
}

export default DiceNum;