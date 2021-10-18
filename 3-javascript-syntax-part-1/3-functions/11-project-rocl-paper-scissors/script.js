// Get User Choice
const getUserChoice = (userInput = userInput.toLowecase()) => {
  if (
    userInput === "pedra" ||
    userInput === "papel" ||
    userInput === "tesoura" ||
    userInput === "bomba"
  ) {
    return userInput;
  } else {
    console.log("Error!");
  }
};

// Get Computer Choice
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "pedra";
  } else if (randomNumber === 1) {
    return "papel";
  } else if (randomNumber === 2) {
    return "tesoura";
  }
};

// Determine Winner
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "Jogo empatado";
  }
  if (userChoice === "pedra") {
    if (computerChoice === "papel") {
      return "O computador venceu!";
    } else {
      return "Você venceu";
    }
  }
  if (userChoice === "papel") {
    if (computerChoice === "tesoura") {
      return "O computador venceu!";
    } else {
      return "Você venceu";
    }
  }
  if (userChoice === "tesoura") {
    if (computerChoice === "pedra") {
      return "O computador venceu!";
    } else {
      return "Você venceu";
    }
  }
  if (userChoice === "bomba") {
    return "A bomba destrói tudo!";
  }
};

// The Game
const playGame = () => {
  const userChoice = getUserChoice("tesoura");
  const computerChoice = getComputerChoice();
  console.log("Você escolheu: " + userChoice);
  console.log("O computador escolheu: " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};
playGame();
