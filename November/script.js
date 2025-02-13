fetch('asd.json')
.then(function(response) {
    return response.text();
})
.then(function(text) {
    console.log(text);
});