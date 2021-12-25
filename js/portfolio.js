var portfoiloItems = [
    {
        Image: 'img/20211103DH1056.jpg',
        Label: ['Hockey'],
    },
    {
        Image: 'img/20211103DH1056.jpg',
        Label: ['Hockey'],
    },
    {
        Image: 'img/20211103DH1056.jpg',
        Label: ['Hockey'],
    },
    {
        Image: 'img/20211103DH2533.jpg',
        Label: ['Natur'],
    },
    {
        Image: 'img/20211103DH2533.jpg',
        Label: ['Natur'],
    },
    {
        Image: 'img/20211103DH1056.jpg',
        Label: ['Hockey','Sport'],
    },
    {
        Image: 'img/20211103DH2533.jpg',
        Label: ['Natur'],
    },
    {
        Image: 'img/20211103DH2533.jpg',
        Label: ['Natur'],
    }
];

const portfolioGrid = document.querySelector('#portfoliogrid')

function LoadPortfolio () {
    portfolioGrid.innerHTML = ''
    var portfolioSelect = document.querySelector('#portfolio__select')

    loadAll = false
    if (portfolioSelect.value == 'Alla') {
        loadAll = true
    }

    portfoiloItems.forEach(item => {
        
        hasLabel = false
    
        item.Label.forEach(label => {
            if (label == portfolioSelect.value) {
                hasLabel = true;
            }
        }) 
        
        if (hasLabel == true || loadAll == true) {
            var FullImg = document.createElement('a')
            FullImg.classList.add('portfolio__griditem')
            FullImg.href = item.Image
            var img = document.createElement('img')
            img.src = item.Image
            FullImg.appendChild(img)
            portfolioGrid.appendChild(FullImg)
        }
    })
}

LoadPortfolio()