import { useState } from 'react'
import './App.css'
import getComputerInput from './getComputerInput';

function App() {
  const [ playerInput, setPlayerInput ] = useState('');
  const [ computerInput, setComputerInput ] = useState('');
  const [ result, setResult ] = useState('')
  const beats = {
      rock: ['scissors', 'lizard'],
      scissors: ['paper', 'lizard'],
      paper: ['rock', 'spock'],
      lizard: ['paper', 'spock'],
      spock: ['scissors', 'rock'],
    }

  const handleChange = (value) => {
    setPlayerInput(value);
  }

  const handleClick = () => {
    let compInput = getComputerInput();
    setComputerInput(compInput);
    setResult(() => {
      if (compInput === playerInput) {
        return "It is a draw"
      } else {
        let res = (beats[playerInput].includes(compInput) ? 'Player' : 'Computer'); 
        return `The winner is ${res}`;
      }
    })
  }

  return ( 
    <div className='main-container'>
      <div className='container'>
        <div className='title-container'>
          <div className='title'>Rock, Paper, Scissors, Lizard and Spock</div>
        </div>
        <div className='input-container'>
          <label for='choice'>Pick a choice:</label>
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

        <button className='btn' onClick={() => handleClick()}>Generate Computer Input</button>
        <div className='container'>
          <div className='computer'>Computer Choice: {computerInput}</div>
        </div>
          <div className='winner'>Result: {result}</div>
      </div>
    </div>
  )
}

export default App
