// | Defined buttons | //
let colorDiv = document.getElementById('colorDiv');
let blueBtn = document.getElementById('blueBtn');
let redBtn = document.getElementById('redBtn');
let greenBtn = document.getElementById('greenBtn');
let resetBtn = document.getElementById('resetBtn');

// | Make the buttons change the color of the background | //
blueBtn.addEventListener('click', function() {
    colorDiv.style.backgroundColor = 'blue';
});

redBtn.addEventListener('click', function() {
    colorDiv.style.backgroundColor = 'red';
});

greenBtn.addEventListener('click', function() {
    colorDiv.style.backgroundColor = 'green';
});

resetBtn.addEventListener('click', function() {
    colorDiv.style.backgroundColor = 'white';
});
