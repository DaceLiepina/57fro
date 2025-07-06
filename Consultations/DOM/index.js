
const formElement = document.getElementById('form');
const listElement = document.getElementById('persons-list');
const clearBtnElement = document.getElementById('clear');
const clearOneBtnElement = document.getElementById('clear-one');


const persons = [];


function clearList() {
    while (listElement.hasChildNodes()) {
        listElement.removeChild(listElement.firstChild);
    }
}

function clearFirst() {
    if (listElement.hasChildNodes()) {
        listElement.removeChild(listElement.firstChild);
    }
}

function clearInputs(event) {
    event.target.nickname.value = '';
    event.target.place.value = '';
}

function changeStatus(event) {
    const listItem = event.target;
    if (listItem.style.textDecoration === 'line-through') {
        listItem.style.textDecoration = 'none';
    } else {
        listItem.style.textDecoration = 'line-through';
    }
}

clearBtnElement.addEventListener('click', clearList);
clearOneBtnElement.addEventListener('click', clearFirst);

formElement.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = event.target.nickname.value.trim()
    const place = event.target.place.value.trim()

    if (!name || !place) {
        alert('Please fill in all felds');
        return;
    }

    const person = {
        name: name,
        place: place
    };
    
    persons.push(person);
    
    const listItem = document.createElement('li');
    listItem.textContent = `${person.name} ${person.place}`;
    listItem.addEventListener('click', changeStatus);
    
    listElement.appendChild(listItem);
    
    clearInputs(event);
});
