// Get User Choice
const getUserChoice = (userInput = userInput.toLowecase()) => {
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissor" ||
    userInput === "bomb"
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
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else if (randomNumber === 2) {
    return "scissor";
  }
};

// Determine Winner
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "The game was tie";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "The computer won!";
    } else {
      return "You won";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissor") {
      return "The computer won!";
    } else {
      return "You won";
    }
  }
  if (userChoice === "scissor") {
    if (computerChoice === "rock") {
      return "The computer won!";
    } else {
      return "You won";
    }
  }
  if (userChoice === "bomb") {
    return "The bomb destroy everything!";
  }
};

// The Game
const playGame = () => {
  const userChoice = getUserChoice("scissor");
  const computerChoice = getComputerChoice();
  console.log("You Choose: " + userChoice);
  console.log("Computer Choose: " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};
playGame();
