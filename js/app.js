'use strict';

const userNamePrompt = 'Hello and welcome to my site. My name is David, what can I call you?';
const userName = prompt(userNamePrompt);
const greetingPrompt = `Nice to meet you, ${userName}. Would you like to play a game to get to know me better?`;
// const favoriteNumberPrompt = 'What is my favorite number?';
// const favoriteNumber = prompt(favoriteNumberPrompt);
// const contryRepresentationPrompt = 'Guess a countries that is represented in my household (besides United States and Cuba)?'
// const countryRepresentation = prompt(contryRepresentationPrompt);

const questionPrompts = [
  'Am I from Florida?',
  'Am I Cuban?',
  'Am I fluent in Spanish?',
  'Am I fluent in French',
  'Is my favroite food Cuban food?',
];

// const countries = [
//   'Dominican Republic',
//   'France',
//   'Italy',
//   'Tunisia',
// ];

const knowDavid = prompt(greetingPrompt).toLowerCase();
let i = 0;

if (knowDavid === 'yes' || knowDavid === 'y') {
  for (i; i < questionPrompts.length; i++) {
    let response = prompt(questionPrompts[i]).toLowerCase();

    // if (typeof responseNumber === 'number') {
    //   if (response < 9) {
    //     alert('Too low');
    //   } else if (response > 9){
    //     alert('Too high');
    //   } else {
    //     alert('You got it');
    //   }
    // }

    if (response === 'yes' || response === 'y') {
      switch (i) {
      case (i = 0):
        alert(`Correct ${userName}. I am a rare Florida naitve.`);
        console.log(`Correct ${userName}. I am a rare Florida naitve.`);
        break;
      case (i = 1):
        alert('I am first-generation Cuban, good guess!');
        console.log('I am first-generation Cuban, good guess!');
        break;
      case (i = 2):
        alert('Si! I am a native Spanish speaker');
        console.log('Yes! I am a native Spanish speaker');
        break;
      case (i = 3):
        alert ('Non, but I am conversant in French.');
        console.log('No, but I am conversant in French.');
        break;
      case (i = 4):
        alert('Of course it is!');
        console.log('Of course it is!');
        break;
      default:
        alert('Learn more about me on the site!');
      }
    } else if (response === 'no' || response === 'n') {
      switch (i) {
      case (i = 0):
        alert('I know it surprising, but I was born andraised in Florida.');
        console.log('I know it surprising, but I was born andraised in Florida.');
        break;
      case (i = 1):
        alert('I am Cuban, but the odds were on your side!');
        console.log('I am Cuban, but the odds were on your side!');
        break;
      case (i = 2):
        alert('Being first-generation Cuban I had tospeak to my grand-parents in Spanish.');
        console.log('Being first-generation Cuban I had tospeak to my grand-parents in Spanish.');
        break;
      case (i = 3):
        alert ('I am not fluent, but I am conversant.');
        console.log('I am not fluent, but I am conversant.');
        break;
      case (i = 4):
        alert('It is. Cuban food reminds me of home.');
        console.log('I do. Cuban food reminds me of home.');
        break;
      default:
        alert('Learn more about me on the site!');
      }
    } else {
      let gameError = 0;
      while(gameError < 3) {
        gameError++;
        alert('Please enter yes/y or no/n');
        prompt(questionPrompts[i]).toLowerCase();
      }
    }
  }

} else if (knowDavid === 'no' || knowDavid === 'n') {
  alert('Ok. Thank you for visiting my site nonetheless');
}

console.log(questionPrompts[i]);
