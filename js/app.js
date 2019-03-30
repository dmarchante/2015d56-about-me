'use strict';

const userNamePrompt = 'Hello and welcome to my site. My name is David, what can I call you?';
const userName = prompt(userNamePrompt);
const questionPrompts = [
  'Am I from Florida?',
  'Am I Cuban?',
  'Am I fluent in Spanish?',
  'Am I fluent in French?',
  'Is my favroite food Cuban food?',
  'What is my favorite number?',
  'What countries are represented in my household?',
];

introductionGame();

function introductionGame() {
  const greetingPrompt = `Nice to meet you, ${userName}. Would you like to play a game to get to know me better?`;
  const knowDavid = prompt(greetingPrompt).toLowerCase();
  let question = 0;

  if (knowDavid === 'yes' || knowDavid === 'y') {
    for (question; question < questionPrompts.length; question++) {
      if (question <= 4) {
        boolResponse(question);
      } else if (question === 5) {
        numberResponse(question);
      } else if (question === 6) {
        countryResponse(question);
      }
    }
  } else if (knowDavid === 'no' || knowDavid === 'n') {
    alert('Ok. Thank you for visiting my site nonetheless');
  }

  console.log(questionPrompts[question]);
}

function boolResponse(question) {
  let response = prompt(questionPrompts[question]).toLowerCase();

  if (response === 'yes' || response === 'y') {
    positiveResponse(question, response);
  } else if (response === 'no' || response === 'n') {
    negativeResponse(question, response);
  } else {
    errorResponseBool(question);
  }
}
function positiveResponse(question, response) {
  switch (question) {
  case (0):
    alert(`Correct ${userName}. I am a rare Florida naitve.`);
    console.log(questionPrompts[question]);
    console.log(response);
    console.log(`Correct ${userName}. I am a rare Florida naitve.`);
    break;
  case (1):
    alert('I am first-generation Cuban, good guess!');
    console.log(questionPrompts[question]);
    console.log(response);
    console.log('I am first-generation Cuban, good guess!');
    break;
  case (2):
    alert('Si! I am a native Spanish speaker');
    console.log(questionPrompts[question]);
    console.log(response);
    console.log('Yes! I am a native Spanish speaker');
    break;
  case (3):
    alert('Non, but I am conversant in French.');
    console.log(questionPrompts[question]);
    console.log(response);
    console.log('Non, but I am conversant in French.');
    break;
  case (4):
    alert('Of course it is!');
    console.log(questionPrompts[question]);
    console.log(response);
    console.log('Of course it is!');
    break;
  default:
    alert('Learn more about me on the site!');
  }
}

function negativeResponse(question, response) {
  switch (question) {
  case (0):
    alert('I know it surprising, but I was born andraised in Florida.');
    console.log(questionPrompts[question]);
    console.log(response);
    console.log('I know it surprising, but I was born andraised in Florida.');
    break;
  case (1):
    alert('I am Cuban, but the odds were on your side!');
    console.log(questionPrompts[question]);
    console.log(response);
    console.log('I am Cuban, but the odds were on your side!');
    break;
  case (2):
    alert('Being first-generation Cuban I had tospeak to my grand-parents in Spanish.');
    console.log(questionPrompts[question]);
    console.log(response);
    console.log('Being first-generation Cuban I had tospeak to my grand-parents in Spanish.');
    break;
  case (3):
    alert('I am not fluent, but I am conversant.');
    console.log(questionPrompts[question]);
    console.log(response);
    console.log('I am not fluent, but I am conversant.');
    break;
  case (4):
    alert('It is. Cuban food reminds me of home.');
    console.log(questionPrompts[question]);
    console.log(response);
    console.log('I do. Cuban food reminds me of home.');
    break;
  default:
    alert('Learn more about me on the site!');
  }
}

function numberResponse(question) {
  const favoriteNumberPrompt = 'What is my favorite number?';

  let attemptsFavoriteNumber = 1;
  while (attemptsFavoriteNumber <= 3) {
    let responseNumber = prompt(`${favoriteNumberPrompt} You are attempting try ${attemptsFavoriteNumber} out of 3.`);
    attemptsFavoriteNumber++;
    if (responseNumber < 9) {
      alert('Too low.');
      console.log(favoriteNumberPrompt);
      console.log(responseNumber);
      console.log('Too low.');
    } else if (responseNumber > 9) {
      alert('Too high');
    } else if (responseNumber === 9) {
      alert('You got it');
      break;
    } else {
      errorResponseNumber(question);
    }
  }
}

function countryResponse(question) {
  const contryRepresentationPrompt = 'Guess a countries that is represented in my household (besides United States and Cuba)?';
  const countries = [
    'Dominican Republic',
    'France',
    'Italy',
    'Tunisia',
  ];

  let attemptsCountry = 1;

  while (attemptsCountry < 3) {
    let countryResponse = prompt(`${contryRepresentationPrompt} You are attempting try ${attemptsCountry} out of 3.`);
    attemptsCountry++;
    for(let country = 1; country < countries.length; country++){
      if (countryResponse === countries[country]){
        switch(countryResponse) {
        case ('Dominican Republic'):
          alert('Yes! I am half Dominican');
          console.log(contryRepresentationPrompt[country]);
          console.log(countryResponse);
          console.log('Yes! I am half Dominican');
          break;
        case ('France'):
          alert('Yes! Everyone in my household are French citiznes except me.');
          console.log(contryRepresentationPrompt[country]);
          console.log(countryResponse);
          console.log('Yes! Everyone in my household are French citizens except me.');
          break;
        case ('Italy'):
          alert('Yes! My better half\'s background is Italian.');
          console.log(contryRepresentationPrompt[country]);
          console.log(countryResponse);
          console.log('Yes! My better half\'s background is Italian.');
          break;
        case ('Tunisia'):
          alert('My wife\'s family moved from Italy via Tunisia.');
          console.log(contryRepresentationPrompt[country]);
          console.log(countryResponse);
          console.log('My wife\'s family moved from Italy via Tunisia.');
          break;
        default:
          alert(`Try again. ${countryResponse}`);
        }
      } else {
        errorResponseCountry(question);
      }
    }
  }
}

function errorResponseBool(question) {
  let gameError = 0;
  while (gameError < 3) {
    gameError++;
    alert('Please enter yes/y or no/n');
    prompt(questionPrompts[question]).toLowerCase();
  }
}

function errorResponseNumber(question) {
  let numberError = 0;
  while (numberError < 3) {
    numberError++;
    alert('Please enter a number');
    prompt(questionPrompts[question]).toLowerCase();
  }
}

function errorResponseCountry(question) {
  let countryError = 0;
  while (countryError < 3) {
    countryError++;
    alert('Please enter a number');
    prompt(questionPrompts[question]).toLowerCase();
  }
}
