let listaelemen = document.getElementById('listaelemen');
let gameInput = document.getElementById('gameInput');

let addBtn = document.getElementById('addBtn');
let insertBtn = document.getElementById('insertBtn');
let replaceBtn = document.getElementById('replaceBtn');
let deleteBtn = document.getElementById('deleteBtn');
let cloneBtn = document.getElementById('cloneBtn');
let createSublistDOMBtn = document.getElementById('createSublistDOMBtn');
let createSublistInnerHTMLBtn = document.getElementById('createSublistInnerHTMLBtn');

// | Add\'s a custom elevent | //
addBtn.addEventListener('click', function() {
    let newGame = gameInput.value.trim();
    if (newGame) {
        let newItem = document.createElement('li');
        newItem.textContent = newGame;
        listaelemen.appendChild(newItem);
        gameInput.value = '';
    } else {
        alert('Yo bro, add a text or somenthing XD');
    }
});

// | Insert a paragraph default value | //
insertBtn.addEventListener('click', function() {
    let newItem = document.createElement('li');
    newItem.textContent = 'Element added as placeholer....';
    if (listaelemen.firstChild) {
        listaelemen.insertBefore(newItem, listaelemen.firstChild);
    } else {
        listaelemen.appendChild(newItem);
    }
});

// | Replace the last paragraph / ||
replaceBtn.addEventListener('click', function() {
    if (listaelemen.lastChild) {
        listaelemen.lastChild.textContent = 'Replaced element placeholder :x';
    }
});

// | Delete the last paragraph | //
deleteBtn.addEventListener('click', function() {
    if (listaelemen.lastChild) {
        listaelemen.removeChild(listaelemen.lastChild);
    }
});

// | Clone all the list of games | //
cloneBtn.addEventListener('click', function() {
    let clone = listaelemen.cloneNode(true);
    document.body.appendChild(clone);
});

// | Dom | //
createSublistDOMBtn.addEventListener('click', function() {
    let sandboxItem = listaelemen.firstChild;
    let sublist = document.createElement('ul');
    let subItem = document.createElement('li');
    subItem.textContent = 'Placeholder subelement with DOM';
    sublist.appendChild(subItem);
    sandboxItem.appendChild(sublist);
});

// | InnerHTML | //
createSublistInnerHTMLBtn.addEventListener('click', function() {
    let sandboxItem = listaelemen.firstChild;
    let sublistHTML = '<ul><li>Placeholder subelement with InnerHTML</li></ul>';
    sandboxItem.innerHTML += sublistHTML;
});
