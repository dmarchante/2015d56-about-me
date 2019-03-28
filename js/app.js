'use strict';

const userNamePrompt = 'Hello and welcome to my site. My name is David, what can I call you?';
const userName = prompt(userNamePrompt);
const greetingPrompt = `Nice to meet you, ${userName}. Would you like to play a game to get to know me better?`;

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

function positiveResponse(question, response) {
  switch (question) {
  case (question = 0):
    alert(`Correct ${userName}. I am a rare Florida naitve.`);
    console.log(questionPrompts[question]);
    console.log(response);
    console.log(`Correct ${userName}. I am a rare Florida naitve.`);
    break;
  case (question = 1):
    alert('I am first-generation Cuban, good guess!');
    console.log(questionPrompts[question]);
    console.log(response);
    console.log('I am first-generation Cuban, good guess!');
    break;
  case (question = 2):
    alert('Si! I am a native Spanish speaker');
    console.log(questionPrompts[question]);
    console.log(response);
    console.log('Yes! I am a native Spanish speaker');
    break;
  case (question = 3):
    alert('Non, but I am conversant in French.');
    console.log(questionPrompts[question]);
    console.log(response);
    console.log('Non, but I am conversant in French.');
    break;
  case (question = 4):
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
  case (question = 0):
    alert('I know it surprising, but I was born andraised in Florida.');
    console.log(questionPrompts[question]);
    console.log(response);
    console.log('I know it surprising, but I was born andraised in Florida.');
    break;
  case (question = 1):
    alert('I am Cuban, but the odds were on your side!');
    console.log(questionPrompts[question]);
    console.log(response);
    console.log('I am Cuban, but the odds were on your side!');
    break;
  case (question = 2):
    alert('Being first-generation Cuban I had tospeak to my grand-parents in Spanish.');
    console.log(questionPrompts[question]);
    console.log(response);
    console.log('Being first-generation Cuban I had tospeak to my grand-parents in Spanish.');
    break;
  case (question = 3):
    alert('I am not fluent, but I am conversant.');
    console.log(questionPrompts[question]);
    console.log(response);
    console.log('I am not fluent, but I am conversant.');
    break;
  case (question = 4):
    alert('It is. Cuban food reminds me of home.');
    console.log(questionPrompts[question]);
    console.log(response);
    console.log('I do. Cuban food reminds me of home.');
    break;
  default:
    alert('Learn more about me on the site!');
  }
}

function errorResponse(question) {
  let gameError = 0;
  while (gameError < 3) {
    gameError++;
    alert('Please enter yes/y or no/n');
    prompt(questionPrompts[question]).toLowerCase();
  }
}

function introductionGame() {

  let i = 0;

  const knowDavid = prompt(greetingPrompt).toLowerCase();

  if (knowDavid === 'yes' || knowDavid === 'y') {
    for (i; i < questionPrompts.length; i++) {
      if (i <= 4) {
        let response = prompt(questionPrompts[i]).toLowerCase();

        if (response === 'yes' || response === 'y') {
          positiveResponse(i, response);
        } else if (response === 'no' || response === 'n') {
          negativeResponse(i, response);
        } else {
          errorResponse(i);
        }
      } else if (i === 5) {
        const favoriteNumberPrompt = 'What is my favorite number?';

        let attempts = 0;
        let responseNumber = prompt(favoriteNumberPrompt);
        while (attempts < 3) {
          attempts++;
          if (attempts > 0) {
            responseNumber = prompt(`${favoriteNumberPrompt} you have ${attempts} of 3 left.`);
          }
          if (responseNumber < 9) {
            alert('Too low');
          } else if (responseNumber > 9) {
            alert('Too high');
          } else {
            alert('You got it');
          }
        }
      } else if (i === 6) {
        const countries = [
          'Dominican Republic',
          'France',
          'Italy',
          'Tunisia',
        ];

        const contryRepresentationPrompt = 'Guess a countries that is represented in my household (besides United States and Cuba)?';
        let countryResponse = prompt(contryRepresentationPrompt);
        let n = 0;

        for (n; n < countries.length; n++) {
          if (countries[n] === countryResponse) {
            alert('Correct!');
          } else {
            alert('Incorrect.');
          }
        }
      }
    }
  } else if (knowDavid === 'no' || knowDavid === 'n') {
    alert('Ok. Thank you for visiting my site nonetheless');
  }
}
// console.log(questionPrompts[]);
