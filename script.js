const button = document.getElementById('toggleButton');
const list = document.getElementById('ingredientList');

button.addEventListener('click', () => {
  if (list.classList.contains('hidden')) {
    list.classList.remove('hidden');
    button.textContent = "Hide Ingredients";
  } else {
    list.classList.add('hidden');
    button.textContent = "Show Ingredients";
  }
});


