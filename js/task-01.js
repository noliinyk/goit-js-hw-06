const allCategories = document.querySelectorAll('.item');
console.log('number of categories:', allCategories.length);

const array= [];
allCategories.forEach(el => {
    console.log('Categories:', el.querySelector('h2').textContent)
    console.log('Elements:', el.querySelectorAll('li').length)
    })
