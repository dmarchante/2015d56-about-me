'use strict';

// Initailizing initial variables
const userNamePrompt = 'Hello, and welcome to my site! You can call me David, what can I call you?';
const thankYouMessagePrompt = 'Okay. But thank you for visiting nonetheless.';
const errorPrompt = 'Please answer with yes/y or no/n. Note: the answers are not case-sensitive.';

let error = false;
let userName = null;

this.userLogic();

function userLogic(error) {
  const userPrompt = 'Hello, and welcome to my site! You can call me David, what can I call you?';
  
  if(error == true) {
    userName = prompt(`Please enter a value. ${userPrompt}`);
  } else {
    userName = prompt(userPrompt);
  }
  userResponseLogic(userName);
}

function userResponseLogic(response) {
  error = false;

  if (response) {
    knowLogic();
  } else {
    error = true;

    userLogic(error);
  }
}

function knowLogic(error) {
  let knowResponse = null;
  const getToKnowPrompt = `Hey ${userName}, would like to get to know me?`;

  if(error == true) {
    knowResponse = prompt(`${errorPrompt} ${getToKnowPrompt}`).toLowerCase();;
  } else {
    knowResponse = prompt(getToKnowPrompt).toLowerCase();;
  }

  knowResponseLogic(knowResponse);
}

function knowResponseLogic(response) {
  error = false;

  if (response === 'yes' || response === 'y') {
    stateLogic();
  } else if (response === 'no' || response === 'n') {
    const thankYouMessage = thankYouMessagePrompt;

    alert(thankYouMessage);
  } else {
    error = true;

    knowLogic(error);
  }
}

function stateLogic(error) {
  let stateResponse = null;
  const homeStatePrompt = 'Great! Am I from Florida?';

  if(error == true) {
    stateResponse = prompt(`${errorPrompt} ${homeStatePrompt}`).toLowerCase();;
  } else {
    stateResponse = prompt(homeStatePrompt).toLowerCase();;
  }

  stateResponseLogic(stateResponse);
}

function stateResponseLogic(response) {
  error = false

  if (response === 'yes' || response === 'y') {
    const correctState = 'Yes! I am from Florida.';

    spanishLogic(error, correctState);
  } else if (response === 'no' || response === 'n') {
    const incorrectState = 'I am from Florida, but nice try.';

    spanishLogic(error, incorrectState);
  } else {
    error = true;

    stateLogic(error);
  }
}

function spanishLogic(error, state) {
  let spanishResponse = null;
  const spanishLanguagePrompt = 'Am I fluent in Spanish?';

  if (error == true) {
    spanishResponse = prompt(`${errorPrompt} ${spanishLanguagePrompt}`).toLowerCase();
  } else {
    spanishResponse = prompt(`${state} ${spanishLanguagePrompt}`).toLowerCase();
  }

  spanishResponseLogic(spanishResponse);
}

function spanishResponseLogic(response) {
  error = false;

  if (response === 'yes' || response === 'y') {
    const correctSpanish = 'Yes! I do speak Spanish.';

    frenchLogic(error, correctSpanish);
  } else if (response === 'no' || response === 'n') {
    const incorrectSpanish = 'I do speak Spanish, but nice try.';

    frenchLogic(error, incorrectSpanish);
  } else {
    error = true;

    spanishLogic(error);
  }
}

function frenchLogic(error, spanish) {
  let frenchResponse = null;
  const frenchLanguagePrompt = 'Am I fluent French?';

  if (error == true) {
    frenchResponse = prompt(`${errorPrompt} ${frenchLanguagePrompt}`).toLowerCase();
  } else {
    frenchResponse = prompt(`${spanish} ${frenchLanguagePrompt}`).toLowerCase();
  }

  frenchResponseLogic(frenchResponse);
}

function frenchResponseLogic(response) {
  error = false;

  if (response === 'yes' || response === 'y') {
    const incorrectFrench = 'I speak a a good amount of French, but not enough enough to call myself fluent.';

    familyOriginLogic(error, incorrectFrench);
  } else if (response === 'no' || response === 'n') {
    const correctFrench = 'Correct! I do not speak French fluently.';

    familyOriginLogic(error, correctFrench);
  } else {
    error = true;

    frenchLogic(error);
  }
}

function familyOriginLogic(error, french) {
  let familyOriginResponse = null;
  const familyOriginPrompt = 'Am I Cuban?';

  if(error == true){
    familyOriginResponse = prompt(`${errorPrompt} ${familyOriginPrompt}`).toLowerCase();;
  } else {
    familyOriginResponse = prompt(`${french} ${familyOriginPrompt}`).toLowerCase();;
  }

  familyOriginResponseLogic(familyOriginResponse);
}

function familyOriginResponseLogic(response) {
  error = false;

  if (response === 'yes' || response === 'y') {
    const correctFamilyOrigin = 'Yes! I am a first-generation Cuban.';
  
    foodLogic(error, correctFamilyOrigin);
  } else if (response === 'no' || response === 'n') {
    const incorrectFamilyOrigin = 'I am Cuban, but the odds were on your side.';
  
    foodLogic(error, incorrectFamilyOrigin);
  } else {
    error = true;

    familyOriginLogic(error);
  }
}

function foodLogic(error, familyOrigin) {
  let foodResponse = null;
  const favoriteFoodPrompt = 'Is my favorite food Cuban food?';

  if (error == true) {
    foodResponse = prompt(`${errorPrompt} ${favoriteFoodPrompt}`).toLowerCase();
  } else {
    foodResponse = prompt(`${familyOrigin} ${favoriteFoodPrompt}`).toLowerCase();
  }

  foodResponseLogic(foodResponse);
}

function foodResponseLogic(response) {
  error = false;

  if (response === 'yes' || response === 'y') {
    const correctFood = 'Of course I love Cuban food.';

    alert(correctFood);
  } else if (response === 'no' || response === 'n') {
    const incorrectFood = 'I would be an anomaly if I did not love Cuban food since I am Cuban.';

    alert(incorrectFood);
  } else {
    error = true;

    foodLogic(error);
  }
}
