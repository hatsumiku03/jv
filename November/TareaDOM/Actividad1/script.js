// | Define the buttons and paragraph | //
let para = document.getElementById('para');

let addBtn = document.createElement('button');
addBtn.textContent = 'Add paragraph';
let addMoreBtn = document.createElement('button');
addMoreBtn.textContent = 'Add other paragraph';
let replaceAllBtn = document.createElement('button');
replaceAllBtn.textContent = 'Replace all paragraphs';
let deleteEverythingBtn = document.createElement('button');
deleteEverythingBtn.textContent = 'Delete the last paragraph';
let cloneExistingThingsBtn = document.createElement('button');
cloneExistingThingsBtn.textContent = 'Clone all paragraphs';

// | Add al the shit xD | //
para.appendChild(addBtn);
para.appendChild(document.createElement('br'));
para.appendChild(addMoreBtn);
para.appendChild(document.createElement('br'));
para.appendChild(replaceAllBtn);
para.appendChild(document.createElement('br'));
para.appendChild(deleteEverythingBtn);
para.appendChild(document.createElement('br'));
para.appendChild(cloneExistingThingsBtn);

// | Make the buttons work | //
addBtn.addEventListener("click", function(){
    let newPara = document.createElement('p');
    newPara.textContent = 'New paragraph added ;3';
    para.appendChild(newPara);
});

addMoreBtn.addEventListener("click", function(){
    let newPara = document.createElement('p');
    newPara.textContent = 'Inserted paragraph :X';
    para.appendChild(newPara);
});

replaceAllBtn.addEventListener("click", function(){
    let paragraphs = para.getElementsByTagName('p');
    if (paragraphs.length > 0) {
        paragraphs[paragraphs.length - 1].textContent = 'Bye, here\'s been a replaced paragraph ;p';
    }
});

deleteEverythingBtn.addEventListener("click", function(){
    let paragraphs = para.getElementsByTagName('p');
    if (paragraphs.length > 0) {
        para.removeChild(paragraphs[paragraphs.length - 1]);
    }
});

cloneExistingThingsBtn.addEventListener("click", function(){
    let clone = para.cloneNode(true);
    document.body.appendChild(clone);
});
