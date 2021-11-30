const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ul = document.querySelector('#ingredients');
const ingredientEl =ingredients.map(ingredient => {
const list= document.createElement('li');
list.textContent = ingredient;
  list.classList.add('item')
  return list
});
ul.append(...ingredientEl);