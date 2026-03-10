/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

/*Determine whether the lasagna is done*/
export function cookingStatus(time) {

  switch(true) {
    case (time > 0):
      return 'Not done, please wait.';

    case (time === 0):
      return 'Lasagna is done.';

    default:
      return 'You forgot to set the timer.';
  }
  
}

/*Estimate the preparation time*/
export function preparationTime(layers, minutes = 2) {

  return layers.length * minutes;
    
}

/*Compute the amounts of noodles and sauce needed*/
export function quantities(layers) {

  let noodles = 0;
  let sauce = 0;

  let noodleLayer = 0;
  let sauceLayer = 0;

  for(let i = 0; i < layers.length; i++){
    if(layers[i] === 'noodles'){
      noodleLayer += 1;
      noodles = noodleLayer * 50;
    }

    if(layers[i] === 'sauce'){
      sauceLayer += 1;
      sauce = sauceLayer * 0.2;
    }

  }

  return {noodles, sauce}
    
}

/*Add the secret ingredient*/
export function addSecretIngredient(friendsList, myList) {
    let start = myList.length
    let secretIngredient = friendsList[friendsList.length-1]
    
    myList.splice(start, 1, secretIngredient)
}

/*Scale the recipe*/
export function scaleRecipe(recipe, portions) {

  let newRecipe = {};

  for(let ingredients in recipe){

    newRecipe[ingredients] = (recipe[ingredients] * portions) / 2;
  }


  return newRecipe

}