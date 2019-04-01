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
  'What countries are represented in my household (besides United States and Cuba)?',
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
        numberResponseInitial(question);
      } else if (question === 6) {
        countryResponseInitial(question);
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
    errorBoolResponse(question);
  }
}

function positiveResponse(question, response) {
  switch (question) {
  case (0):
    alert(`Correct ${userName}. I am a rare Florida naitve.`);
    responseLog(question, response);
    console.log(`Correct ${userName}. I am a rare Florida naitve.`);
    break;
  case (1):
    alert('I am first-generation Cuban, good guess!');
    responseLog(question, response);
    console.log('I am first-generation Cuban, good guess!');
    break;
  case (2):
    alert('Si! I am a native Spanish speaker');
    responseLog(question, response);
    console.log('Yes! I am a native Spanish speaker');
    break;
  case (3):
    alert('Non, but I am conversant in French.');
    responseLog(question, response);
    console.log('Non, but I am conversant in French.');
    break;
  case (4):
    alert('Of course it is!');
    responseLog(question, response);
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
    responseLog(question, response);
    console.log('I know it surprising, but I was born andraised in Florida.');
    break;
  case (1):
    alert('I am Cuban, but the odds were on your side!');
    responseLog(question, response);
    console.log('I am Cuban, but the odds were on your side!');
    break;
  case (2):
    alert('Being first-generation Cuban I had tospeak to my grand-parents in Spanish.');
    responseLog(question, response);
    console.log('Being first-generation Cuban I had tospeak to my grand-parents in Spanish.');
    break;
  case (3):
    alert('I am not fluent, but I am conversant.');
    responseLog(question, response);
    console.log('I am not fluent, but I am conversant.');
    break;
  case (4):
    alert('It is. Cuban food reminds me of home.');
    responseLog(question, response);
    console.log('I do. Cuban food reminds me of home.');
    break;
  default:
    alert('Learn more about me on the site!');
  }
}

function numberResponseInitial(question) {
  let attemptNumber = 1;
  let responseNumber = prompt(`${questionPrompts[question]} You are attempting try ${attemptNumber} out of 3.`);

  if (parseInt(responseNumber) === 9) {
    alert('You got it');
    responseLog(question, responseNumber);
    console.log('You got it.');
  } else if (parseInt(responseNumber) < 9) {
    alert('Too low.');
    responseLog(question, responseNumber);
    console.log('Too low.');
    numberResponseAttempt(attemptNumber, question);
  } else if (parseInt(responseNumber) < 9) {
    alert('Too low.');
    responseLog(question, responseNumber);
    console.log('Too high.');
    numberResponseAttempt(attemptNumber, question);
  }
}

function numberResponseAttempt(attempt, question) {
  attempt++;

  while (attempt <= 3) {
    let responseNumber = prompt(`${questionPrompts[question]} You are attempting try ${attempt} out of 3.`);
    if (parseInt(responseNumber) === 9) {
      alert('You got it');
      responseLog(question, responseNumber);
      console.log('You got it.');
      attempt = 4;
    } else if (parseInt(responseNumber) < 9) {
      alert('Too low.');
      responseLog(question, responseNumber);
      console.log('Too low.');
      attempt++;
    } else if (parseInt(responseNumber) > 9) {
      alert('Too high');
      responseLog(question, responseNumber);
      console.log('Too high.');
      attempt++;
    } else {
      errorNumberResponse(question);
    }
  }
}

function countryResponseInitial(question) {
  const countries = [
    'dominican republic',
    'france',
    'italy',
    'tunisia',
  ];
  let validResponse = false;
  let attemptsCountry = 1;
  let countryResponse = prompt(`${questionPrompts[question]} You are attempting try ${attemptsCountry} out of 3.`).toLowerCase();

  for(let country = 0; country < countries.length; country++){
    if (countryResponse === countries[country]) {
      validResponse = true;
    }
  }

  if (validResponse) {
    countryResponseLogic(question, countryResponse);
  } else {
    countryResponseAttempt(question, attemptsCountry, countries, validResponse);
  }
}

function countryResponseAttempt(question, attempt, countries, validResponse) {
  attempt++;

  while (attempt <= 3) {
    let countryResponse = prompt(`Sorry, try again. ${questionPrompts[question]} You are attempting try ${attempt} out of 3.`);
    for(let country = 0; country < countries.length; country++){
      if (countryResponse === countries[country]) {
        validResponse = true;
      }
    }

    if (validResponse){
      countryResponseLogic(question, countryResponse);
      attempt = 4;
    } else {
      attempt++;
    }
  }
}

function countryResponseLogic(question, response) {
  switch(response) {
  case ('dominican republic'):
    alert('Yes! I am half Dominican');
    responseLog(question, response);
    console.log('Yes! I am half Dominican');
    break;
  case ('france'):
    alert('Yes! Everyone in my household are French citiznes except me.');
    responseLog(question, response);
    console.log('Yes! Everyone in my household are French citizens except me.');
    break;
  case ('italy'):
    alert('Yes! My better half\'s background is Italian.');
    responseLog(question, response);
    console.log('Yes! My better half\'s background is Italian.');
    break;
  case ('tunisia'):
    alert('My wife\'s family moved from Italy via Tunisia.');
    responseLog(question, response);
    console.log('My wife\'s family moved from Italy via Tunisia.');
    break;
  }

}

function errorBoolResponse(question) {
  alert('Please enter yes/y or no/n');
  prompt(questionPrompts[question]).toLowerCase();
}

function errorNumberResponse(question) {
  alert('Please enter a number');
  prompt(questionPrompts[question]).toLowerCase();
}

function responseLog(question, response) {
  console.log(questionPrompts[question]);
  console.log(response);
}
