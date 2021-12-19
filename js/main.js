//Albums JSON
const albums = [
    {
        Länk: 'https://photos.app.goo.gl/fcavRyLiJbFRJ6Np6',
        Image: 'img/20211219145635070_Kungälv-Mölndal-HockeyTvåan_D50.jpg',
        Titel: 'Kungälv - Mölndal',
        Info: 'Hockeytvåan | 202011219'
    },
    {
        Länk: 'https://photos.app.goo.gl/5sS37L9ChaWbNVLaA',
        Image: 'img/20211212kungalvvastervikj18ettan.jpg',
        Titel: 'Kungälv - Västervik',
        Info: 'J18 Ettan | 202011212'
    },
    {
        Länk: 'https://photos.app.goo.gl/tdQPKP8BKzMQDvru6',
        Image: 'img/20211210185323_D50_6735.jpg',
        Titel: 'Skärgården - Hisingen',
        Info: 'J18 division 2 | 202011210'
    },
    {
        Länk: 'https://photos.app.goo.gl/wLkkFaUmLN5XhW9B7',
        Image: 'img/20211118DH1466.jpg',
        Titel: 'Kungälv - Mölndal',
        Info: 'J18 division 1 | 20201118'
    },
    {
        Länk: 'https://photos.app.goo.gl/6dZ2YYw8K1ZHnNek9',
        Image: 'img/20211114DH1475.jpg',
        Titel: 'Hanhals - Kungälv',
        Info: 'J18 division 1 | 20201114'
    },
    {
        Länk: 'https://photos.app.goo.gl/9TpTX1JrwcgpgC3r8',
        Image: 'img/20211111DH1324.jpg',
        Titel: 'Grästorp - Kungälv',
        Info: 'J18 division 1 | 20201111'
    },
    {
        Länk: 'https://photos.app.goo.gl/npu6YBSo5e3ZnSiy9',
        Image: 'img/20211103DH2533.jpg',
        Titel: 'Hisingen - Uddevalla',
        Info: 'J18 division 1 | 20201103'
    },
];

//Toggle nav

const body = document.querySelector('body');
const header = document.querySelector('.header')
const mainNavToggle = document.querySelector('.toggle__main__nav')
if (mainNavToggle) {
    mainNavToggle.addEventListener('click', () => {
        body.classList.toggle('open_nav')
        header.classList.toggle('open_nav')

    });
};

//Albums generator
const albumsGrid = document.querySelector('.albums__grid')
if (albumsGrid) {
    albums.forEach(album => {
        var albumCoverImg = document.createElement('img')
        albumCoverImg.src = album.Image
        var albumCoverTitle = document.createElement('h6')
        albumCoverTitle.classList.add('album__title')
        albumCoverTitle.appendChild(document.createTextNode(album.Titel))
        var albumCoverInfo = document.createElement('p')
        albumCoverInfo.appendChild(document.createTextNode(album.Info))
        var albumCoverA = document.createElement('a')
        albumCoverA.href = album.Länk
        albumCoverA.target = '_blank'
        albumCoverA.classList.add('album')
        albumCoverA.appendChild(albumCoverImg)
        albumCoverA.appendChild(albumCoverTitle)
        albumCoverA.appendChild(albumCoverInfo)
        albumsGrid.appendChild(albumCoverA)
    });
}

//Länk generator

const links = [
    {
        Namn: 'Home',
        Länk: 'home.html'
    },
    {
        Namn: 'Alla album',
        Länk: 'album.html'
    },
    {
        Namn: 'Senaste album',
        Länk: albums[0].Länk
    },
    {
        Namn: 'Instagram',
        Länk: 'https://www.instagram.com/dennisholmstromfoto/'
    },
];

const links__ul = document.querySelector('.links__ul')
if (links__ul) {
    links.forEach(link => {
        var aText = document.createTextNode(link.Namn)
        var a = document.createElement('a')
        a.appendChild(aText)
        a.href = link.Länk
        links__ul.appendChild(a)
    });
}

