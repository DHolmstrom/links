const links__ul = document.querySelector('.links__ul')
const links = [
    {
        Namn: 'Senaste album',
        Länk: 'https://photos.app.goo.gl/wLkkFaUmLN5XhW9B7'
    },
    {
        Namn: 'Home',
        Länk: 'home.html'
    },
    {
        Namn: 'Alla album',
        Länk: 'album.html'
    },
    {
        Namn: 'Instagram',
        Länk: 'http://www.instagram.com/holmstrom_dennis/'
    },
];
links.forEach(link => {
    var aText = document.createTextNode(link.Namn)
    var a = document.createElement('a')
    a.appendChild(aText)
    a.href = link.Länk
    links__ul.appendChild(a)
});