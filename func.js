let input = document.querySelector('#input-box');
let listContainer = document.querySelector('#list-container');

function btn() {
  if (input.value === ' ') {
    alert("please write something");
  }
  else {
    let li = document.createElement('li');
    li.innerHTML = input.value;
    listContainer.appendChild(li);
  }
  input.value = "";
}