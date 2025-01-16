// | Define the buttons | //
let countLinksBtn = document.getElementById('countLinksBtn');
let listLinksBtn = document.getElementById('listLinksBtn');
let listLinksByParagraphBtn = document.getElementById('listLinksByParagraphBtn');

// | Function of the buttons | //
countLinksBtn.addEventListener('click', function() {
    let totalLinks = document.getElementsByTagName('a').length;
    alert('Total number of links 😎: ' + totalLinks);
});

listLinksBtn.addEventListener('click', function() {
    let links = document.getElementsByTagName('a');
    let references = Array.from(links).map(link => link.href).join('\n');
    alert('All the links:\n' + references);
});

listLinksByParagraphBtn.addEventListener('click', function() {
    let paragraphs = document.getElementsByTagName('p');
    let message = '';
    Array.from(paragraphs).forEach((paragraph, index) => {
        let links = paragraph.getElementsByTagName('a');
        let references = Array.from(links).map(link => link.href).join('\n');
        message += 'Paragraph ' + (index + 1) + ':\n' + references + '\n\n';
    });
    alert('Links listed in every paragraph:\n' + message);
});
