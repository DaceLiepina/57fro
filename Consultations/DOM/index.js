
// atrodu elementus pec ID
const formElement = document.getElementById('form');
const listElement = document.getElementById('persons-list');
const clearBtnElement = document.getElementById('clear');
const clearOneBtnElement = document.getElementById('clear-one');

//izveidoju tuksu masiivu
const persons = [];

// izdara ClearList funkciju
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
    
    const person = {
        name: event.target.nickname.value,
        place: event.target.place.value
    };
    
    persons.push(person);
    
    const listItem = document.createElement('li');
    listItem.textContent = `${person.name} ${person.place}`;
    listItem.addEventListener('click', changeStatus);
    
    listElement.appendChild(listItem);
    
    clearInputs(event);
});
