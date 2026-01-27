const getComputerInput = () => {
    const num = Math.floor(Math.random() * 5);
    switch (num) {
      case 0: return 'rock';
            break;
      case 1: return 'scissors';
            break;
      case 2: return 'paper';
            break;
      case 3: return 'lizard';
            break;
      case 4: return 'spock';
            break;
        default: return 'Wrong input'
    }
  }

  export default getComputerInput