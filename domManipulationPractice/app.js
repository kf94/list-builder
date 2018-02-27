//1.hide/show list
//2.change list description
//3.add item
//  3.a.create a new li element for the the new item
//  3.b.append it to the page
//4.have buttons for each current and added li, up down and remove
//  4.a.create a function that adds buttons to each li
//  4.b.call that function for the current li as well as li that are created
//  4.c.give buttons functionality
//5.make unusable buttons disappear

const toggleListButton = document.querySelector('#toggleList');
const listDiv = document.querySelector('.list');
const listDescription = document.querySelector('p.description');
const descriptionInput = document.querySelector('input.description');
const changeDescriptionButton = document.querySelector('button.description');
const addItemButton = document.querySelector('.addItemButton');
const addItemInput = document.querySelector('.addItemInput');
const listUl = document.querySelector('.list>ul');
const lis = listUl.children;

//1.hide/show list

toggleListButton.addEventListener('click', () => {
  if (listDiv.style.display === '') {
    listDiv.style.display = 'none';
    toggleListButton.textContent = 'Show list';
} else {
  listDiv.style.display = '';
  toggleListButton.textContent = 'Hide list';
}
});

//2.change list Item description

changeDescriptionButton.addEventListener('click', () => {
  listDescription.textContent = descriptionInput.value + ':';
  descriptionInput.value = '';
});

//3.add item

addItemButton.addEventListener('click', () => {
  const newLi = document.createElement('li');
  newLi.textContent = addItemInput.value;      //3.a.
  listUl.appendChild(newLi);
  addItemInput.value = '';
  addButtons(newLi);
  hideButtons(lis);
});


for (let i = 0; i < lis.length; i++) {
  addButtons(lis[i]);
}
//hideButtons(lis)

//4.

function addButtons(li) {
  const newRemove = document.createElement('button');
  newRemove.className = 'remove';
  newRemove.textContent = 'Remove';
  li.appendChild(newRemove);
  const newUp = document.createElement('button');
  newUp.className = 'up';
  newUp.textContent = 'Up';
  li.appendChild(newUp);
  const newDown = document.createElement('button');
  newDown.className = 'down';
  newDown.textContent = 'Down';
  li.appendChild(newDown);
}

listUl.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    if (e.target.className === 'remove') {
      let li = e.target.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);
    }
    if (e.target.className === 'up') {
      let li = e.target.parentNode;
      let ul = li.parentNode;
        if (li.previousElementSibling) {
        ul.insertBefore(li, li.previousElementSibling);
        }
    }
    if (e.target.className === 'down') {
      let li = e.target.parentNode;
      let ul = li.parentNode;
        if (li.nextElementSibling) {
        ul.insertBefore(li.nextElementSibling, li);
        }
    }
  }
  hideButtons(lis);
});

//5.

hideButtons(lis);

function hideButtons(lis) {
  for (let i = 0; i < lis.length; i++) {
    if (lis[i].previousElementSibling) {
      lis[i].children[1].style.display = 'block';
    } else {
      lis[i].children[1].style.display = 'none';
    }
    if (lis[i].nextElementSibling) {
      lis[i].children[2].style.display = 'block';
    } else {
      lis[i].children[2].style.display = 'none';
    }
    if (i % 2 === 0) {
        listUl.children[i].style.backgroundColor = 'LightGray';
    } else {
      listUl.children[i].style.backgroundColor = 'white';
  }
}
};
