var portfoiloItems = [
    {
        Image: 'img/20211103DH1056.jpg',
        Label: 'Hockey',
    },
    {
        Image: 'img/20211103DH1056.jpg',
        Label: 'Hockey',
    },
    {
        Image: 'img/20211103DH1056.jpg',
        Label: 'Hockey',
    },
    {
        Image: 'img/20211103DH2533.jpg',
        Label: 'Natur',
    },
    {
        Image: 'img/20211103DH2533.jpg',
        Label: 'Natur',
    },
    {
        Image: 'img/20211103DH1056.jpg',
        Label: 'Hockey',
    },
    {
        Image: 'img/20211103DH2533.jpg',
        Label: 'Natur',
    },
    {
        Image: 'img/20211103DH2533.jpg',
        Label: 'Natur',
    }
];

createSelectorLi("Alla bilder", "")

var loadedPortfoiloItems = [];

portfoiloItems.forEach(item => {
    var portfoiloGrid = document.getElementById('portfoliogrid')
    var portfolioItem = document.createElement('a')
    portfolioItem.classList.add('portfolio__griditem')
    portfolioItem.setAttribute("aria-label", item.Label.toLowerCase())
    var portfolioItemImg = document.createElement('img')
    portfolioItemImg.src = item.Image
    portfolioItem.appendChild(portfolioItemImg)
    portfoiloGrid.appendChild(portfolioItem)

    if (loadedPortfoiloItems.includes(item.Label)) return

    createSelectorLi(item.Label, item.Label.toLowerCase())

    loadedPortfoiloItems.push(item.Label)
})


function createSelectorLi (text, ariaLabel) {
    var portfoiloSelector = document.getElementById('portfolioSelector')
    var portfoiloSelectorItem = document.createElement('li')
    var portfolioselectorItemText = document.createTextNode(text)
    portfoiloSelectorItem.setAttribute('onclick', 'portfolioselect("' + ariaLabel + '")')
    portfoiloSelectorItem.appendChild(portfolioselectorItemText)

    portfoiloSelector.appendChild(portfoiloSelectorItem)
}



const portfolioGriditems = document.querySelectorAll('.portfolio__griditem')
selectImages(portfolioGriditems)

function portfolioselect(value) {
    
    if(value == "") {
        selectImages(portfolioGriditems)
        return
    }
    clearAllImages()
    var newPortfolioItems = document.querySelectorAll('.portfolio__griditem[aria-label="' + value + '"]')
    selectImages(newPortfolioItems)
}

function selectImages(items) {
    items.forEach(item => {
        item.classList.add('active')
    });
}

function clearAllImages() {
    const portfolioGriditems = document.querySelectorAll('.portfolio__griditem.active')

    portfolioGriditems.forEach(item => {
        item.classList.remove('active')
    });
}