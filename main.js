// VARIABLES

const toggleButton = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.navbar-links');
const navBar = document.querySelector('[data-nav]');
const tabLinks = document.querySelectorAll('.tablinks');
const menuItemDivs = document.querySelectorAll('.style');
const tabContent = document.querySelector('.tab-content-container');
const menuBtn = document.querySelector('.menu-btn');
const homeBtn = document.querySelector('.homeButton');
const modal = document.querySelectorAll('.modal');
const overlay = document.querySelectorAll('.overlay');
const btnCloseModal = document.querySelectorAll('.close-modal');
const navTabLinks = document.querySelectorAll('.navtablink');

let menuMo = false;
let contactsMo = false;

const eatingsBig = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];
const eatingsSmall = ['one', 'two', 'three'];

//MENU OBJECT

const menu = {
    breakfastMenu: [
        {
            name: 'Cornetto Integrale Vuoto',
            prodAllergens: [2, 5, 13],
            frozen: true,
            price: '1,20€',
        },
        {
            name: 'Cornetto Farcito',
            prodAllergens: [2, 5, 13],
            frozen: true,
            price: '1,20€',
        },
        {
            name: 'Cornetto Vuoto',
            prodAllergens: [2, 5, 13],
            frozen: true,
            price: '1,20€',
        },
        {
            name: 'Bombolone',
            prodAllergens: [2, 5, 13],
            frozen: true,
            price: '1,20€',
        },
        {
            name: 'Conchiglia al Cioccolato',
            prodAllergens: [2, 5, 13],
            frozen: true,
            price: '1,20€',
        },
        {
            name: 'Conchiglia alla Crema',
            prodAllergens: [2, 5, 13],
            frozen: true,
            price: '1,20€',
        },
        {
            name: 'Cornetto alle Mandorle',
            prodAllergens: [2, 4, 5, 13],
            frozen: true,
            price: '1,20€',
        },
        {
            name: 'Crostata',
            prodAllergens: [2, 5, 13],
            frozen: false,
            price: '1,20€',
        },
        {
            name: 'Saccottino al Cioccolato',
            prodAllergens: [2, 5, 13],
            frozen: false,
            price: '1,20€',
        },
        {
            name: 'Saccottino Mela e Crema',
            prodAllergens: [2, 5, 13],
            frozen: false,
            price: '1,20€',
        },
        {
            name: 'Treccia ai Frutti di Bosco',
            prodAllergens: [2, 5, 13],
            frozen: true,
            price: '1,20€',
        },
        {
            name: 'Treccia alle Noci',
            prodAllergens: [2, 4, 5, 13],
            frozen: true,
            price: '1,20€',
        },
    ],
    aperitifMenu: [
        {
            name: 'Tagliere Salumi & Formaggi',
            prodAllergens: [2, 5],
            price: '5,00€',
        },
        {
            name: 'Aperitivo Completo',
            prodAllergens: [1, 2, 4, 5, 14],
            price: '7.50€',
        },
        {
            name: 'Aperitivo Semplice',
            prodAllergens: [13, 14],
            price: '3,00€',
        },
        {
            name: 'Nachos con salsa BBQ e Olive',
            prodAllergens: [2, 5, 13],
            price: '1,00€',
        },
        {
            name: 'Olive',
            price: '1,00€',
        },
        {
            name: 'Patatine & Arachidi',
            prodAllergens: [1],
            price: '1,50€',
        },
        {
            name: 'Pizza Trancio Margherita',
            prodAllergens: [2, 5],
            price: '1,00€',
        },
        {
            name: 'Pizza Trancio Farcita',
            prodAllergens: [2, 5, 14],
            price: '1,50€',
        },
        {
            name: 'Pizza Rustica Farcita',
            prodAllergens: [2, 5, 14],
            price: '1,50€',
        },
        {
            name: 'Piadina Farcita',
            prodAllergens: [2, 14],
            price: '3,50€',
        },
        {
            name: 'Panzerotto',
            prodAllergens: [2, 5],
            price: '2,00€',
        },
        {
            name: 'Patatine Fritte',
            frozen: true,
            price: '2,50€',
        },
    ],
    cakeMenu: [
        {
            name: 'Cannolo Siciliano Scomposto',
            prodAllergens: [2, 5, 13],
            price: '3,00€',
        },
        {
            name: 'Cestino Frutta',
            prodAllergens: [2, 5, 13],
            price: '3.00€',
        },
        {
            name: 'Cheesecake',
            prodAllergens: [2, 5, 13],
            price: '3,00€',
        },
        {
            name: 'Kinder Bueno',
            prodAllergens: [2, 4, 5, 13],
            price: '3.00€',
        },
        {
            name: 'Kinder Cereali',
            prodAllergens: [2, 4, 5, 13],
            price: '3.00€',
        },
        {
            name: 'Kinder Delice',
            prodAllergens: [2, 4, 5, 13],
            price: '3.00€',
        },
        {
            name: 'Rocher',
            prodAllergens: [2, 4, 5, 13],
            price: '3.00€',
        },
        {
            name: 'Millefoglie Frutti di Bosco',
            prodAllergens: [2, 5, 13],
            price: '3.00€',
        },
        {
            name: 'Mousse al Pistacchio',
            prodAllergens: [2, 5, 13],
            price: '3.00€',
        },
        {
            name: 'Mousee Black & White',
            prodAllergens: [2, 5, 13],
            price: '3.00€',
        },
        {
            name: 'Nutella Biscuit',
            prodAllergens: [2, 5, 13],
            price: '3.00€',
        },
        {
            name: 'Oreo',
            prodAllergens: [2, 5, 13],
            price: '3.00€',
        },
    ],
    allergens: [
        'Anidride solforosa e Solfiti',
        'Arachidi',
        'Glutine',
        'Crostacei',
        'Frutta a guscio',
        'Latte',
        'Lupini',
        'Molluschi',
        'Pesce',
        'Sedano',
        'Semi di sesamo',
        'Senape',
        'Soia',
        'Uova',
        'Variabili',
    ],
    displayAllergens(arr) {
        let string = [];
        for (let i = 0; i < arr.length; i++) {
            string.push(this.allergens[arr[i]]);
        }
        return `Allergeni: ${string.join(', ')}`;
    },
};

let currentMenu = menu.breakfastMenu;

// FUNCTIONS

const removeMenuItems = function () {
    tabContent.innerHTML = '';
};

const displayFood = function (whichMenu) {
    removeMenuItems();
    for (let y = 0; y < resizeMenu(screenSize()).length; y++) {
        let html;
        if (whichMenu[y]) {
            html = `<div class="${resizeMenu(screenSize())[y]} style">
  <h5 class="product">${whichMenu[y].name}</h5>
  <p class="allergens">${whichMenu[y].hasOwnProperty('prodAllergens') ? menu.displayAllergens(whichMenu[y].prodAllergens) : ''}</p>
  <p class="isFrozen">${whichMenu[y].hasOwnProperty('frozen') ? 'Prodotto congelato' : 'Prodotto Artigianale'}</p>
  <p class="price">${whichMenu[y].price}</p>
</div>`;
        } else {
            return;
        }
        tabContent.insertAdjacentHTML('beforeend', html);
    }
};

const menuTrigger = function () {
    tabLinks.forEach((button, index) => {
        button.addEventListener('click', () => {
            tabLinks.forEach(a => {
                a.classList.remove('activeTab');
            });
            button.classList.add('activeTab');
            switch (button.textContent) {
                case 'Colazione':
                    displayFood(menu.breakfastMenu);
                    currentMenu = menu.breakfastMenu;
                    break;
                case 'Aperitivo':
                    displayFood(menu.aperitifMenu);
                    currentMenu = menu.aperitifMenu;
                    break;
                case 'Dolci al Cucchiaio':
                    displayFood(menu.cakeMenu);
                    currentMenu = menu.cakeMenu;
                    break;
                default:
                    break;
            }
        });
    });
};
menuTrigger();

const reveal = function () {
    let reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
        let windowheight = window.innerHeight;
        let revealtop = reveals[i].getBoundingClientRect().top;
        let revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
};

const screenSize = function () {
    // Get the dimensions of the viewport
    let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    return width;
};

const resizeMenu = function (width) {
    if (width >= 963) {
        tabContent.classList.remove('parentSmall');
        tabContent.classList.add('parentBig');
        return eatingsBig;
    } else {
        tabContent.classList.add('parentSmall');
        tabContent.classList.remove('parentBig');
        return eatingsSmall;
    }
};

const scrollToScreen = function (screenPortion) {
    document.querySelector(`${screenPortion}`).scrollIntoView({
        behavior: 'smooth',
        block: 'center',
    });
};

const openModal = function (index) {
    modal[index].classList.remove('hidden');
    modal[index].classList.add('modalActive');
    overlay[index].classList.remove('hidden');
};

const closeModal = function (index) {
    modal[index].classList.add('hidden');
    modal[index].classList.remove('modalActive');
    overlay[index].classList.add('hidden');
};

// EVENT HANDLERS

toggleButton.addEventListener('click', () => {
    if (navLinks.classList.contains('show-links')) {
        navLinks.classList.remove('show-links');
    } else {
        navLinks.classList.add('show-links');
    }
});

document.querySelectorAll('.card-text').forEach(x => {
    x.innerText = x.innerText.replace(/\./g, '.\n');
});

window.addEventListener('resize', () => {
    if (navLinks.classList.contains('show-links') && window.innerWidth >= '800') {
        navLinks.classList.remove('show-links');
    } else {
        return;
    }
});

window.addEventListener('scroll', function () {
    reveal();
});

window.addEventListener('resize', () => {
    if (window.innerWidth >= '963') {
        displayFood(currentMenu);
    } else {
        displayFood(currentMenu);
    }
});

window.addEventListener('load', function () {
    resizeMenu(screenSize());
});

window.addEventListener('load', function () {
    displayFood(currentMenu);
    tabLinks[0].classList.add('activeTab');
});

window.addEventListener('resize', function () {
    resizeMenu(screenSize());
});

menuBtn.addEventListener('click', function () {
    scrollToScreen('#menu');
});

navTabLinks.forEach(btn =>
    btn.addEventListener('click', function () {
        if (screenSize() <= 800) navLinks.classList.remove('show-links');
        switch (btn.textContent) {
            case 'MENU':
                openModal(0);
                break;
            case 'CONTACTS':
                openModal(1);
                break;
            default:
                break;
        }
    }),
);

btnCloseModal.forEach(button => {
    button.addEventListener('click', function () {
        closeModal(0);
        closeModal(1);
    });
});

overlay.forEach(button => {
    button.addEventListener('click', function () {
        closeModal(0);
        closeModal(1);
    });
});

document.addEventListener('keydown', function (e) {
    if ((e.key === 'Escape' && !modal[0].classList.contains('hidden')) || (e.key === 'Escape' && !modal[1].classList.contains('hidden'))) {
        closeModal(0);
        closeModal(1);
    }
});
