document.addEventListener('DOMContentLoaded', () => {
  const inputBox = document.getElementById('input-box');
  const inputButton = document.getElementById('input-button');
  const todoList = document.querySelector('.to-do-list');

  inputButton.addEventListener('click', onClickInputButton);
  inputBox.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      onClickInputButton();
    }
  });

  function onClickInputButton() {
    const inputValue = inputBox.value.trim();
    if (inputValue !== '') {
      addTodoItem(inputValue);
      inputBox.value = '';
    }
  }

  function addTodoItem(text) {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');
    checkbox.addEventListener('click', onClickCheckbox);

    const span = document.createElement('span');
    span.textContent = text;

    const img = document.createElement('img');
    img.src = '/images/garbage.png';
    img.width = 35;
    img.height = 35;
    img.addEventListener('click', onClickDeleteButton);

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(img);
    todoList.appendChild(li);
  }

  function onClickCheckbox() {
    this.nextElementSibling.classList.toggle('completed');
  }

  function onClickDeleteButton() {
    const li = this.parentElement;
    li.remove();
  }
});