let count = document.getElementById('countLinksBtn');
let list = document.getElementById('listLinksBtn');
let listPerParagraph = document.getElementById('listLinksByParagraphBtn');


count.addEventListener('click', function(){
    let totalOfLinks = document.getElementsByTagName('a').length;
    alert('Hay un total de: ' + totalOfLinks + ' links');
});

list.addEventListener('click', function(){
    let totalOfLinks = document.getElementsByTagName('a');
    let outputList = Array.from(totalOfLinks).map(link  => link.href).join('\n\n');
    alert('All the links:\n' + outputList);
});
    
listPerParagraph.addEventListener('click', function(){
    let allParagraph = document.getElementsByTagName('p');
    let message = '';
    Array.from(allParagraph).forEach((allParagraph, id)=> {
        let totalOfLinks = allParagraph.getElementsByTagName('a');
        let outputList = Array.from(totalOfLinks).map(link  => link.href).join('\n\n');
        message += 'Paragrafo ' + (id + 1) + ':\n' + outputList + '\n\n';
    });
    alert('Mira tío:' + message);

});