import React, { useState } from 'react'
import './App.css'
import getComputerInput from './getComputerInput';

function App() {
  const [ playerInput, setPlayerInput ] = useState('');
  const [ computerInput, setComputerInput ] = useState('');
  const [ result, setResult ] = useState('');
  const [ showResult, setShowResult ] = useState(false);
  const beats = {
      rock: ['scissors', 'lizard'],
      scissors: ['paper', 'lizard'],
      paper: ['rock', 'spock'],
      lizard: ['paper', 'spock'],
      spock: ['scissors', 'rock'],
    }

  const handleChange = (value) => {
    setPlayerInput(value);
    setShowResult(false);
  }

  const handleClick = () => {
    let compInput = getComputerInput();
    setComputerInput(compInput.charAt(0).toUpperCase() + compInput.slice(1));
    setResult(() => {
      if (compInput === playerInput) {
        return "Draw - great minds think alike."
      } else {
        let res = (beats[playerInput].includes(compInput) ? 'You take the win!' : 'The computer takes the win.'); 
        return res;
      }
    });
    setShowResult(true);
  }

  return ( 
    <div className='main-container'>
      <div className='wrapper'>
        <div className='title-container'>
          <div className='title'>Rock Paper Scissors Lizard Spock</div>
        </div>
        <div className='container'>
          <label htmlFor='choice'>Make your selection</label>
          <select 
            id='choice'
            name='choice'
            type='text' 
            className='player-input' 
            onChange={(e) => handleChange(e.target.value)}
          >
            <option value=''></option>
            <option value="rock">Rock</option>
            <option value="paper">Paper</option>
            <option value="scissors">Scissors</option>
            <option value="lizard">Lizard</option>
            <option value="spock">Spock</option>
          </select>
        </div>

        <button className='btn' onClick={() => handleClick()}>Play Round</button>
        <div className='container'>
          <div className='computer'>Computer's Move: &nbsp;&nbsp;{computerInput}</div>
        </div>
        <div className={showResult ? 'winner show-result' : 'winner'} >{result}</div>
      </div>
      <div className='rule-container'>
        <div className='rule-title'>Rules:</div>
        <div className='info-container'>
          <div className="rules"><strong>Rock</strong> defeats Scissors and Lizard</div>
          <div className="rules"><strong>Paper</strong> defeats Rock and Spock</div>
          <div className="rules"><strong>Scissors</strong> defeats Paper and Lizard</div>
          <div className="rules"><strong>Lizards</strong> defeats Paper and Spock</div>
          <div className="rules"><strong>Spock</strong> defeats Scissors and Rock</div>
        </div>
      </div>
    </div>
  )
}

export default App
