const toggleButton = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.navbar-links');
const navBar = document.querySelector('[data-nav]');
const tabLinks = document.querySelectorAll('.tablinks');
const menuItemDivs = document.querySelectorAll('.style');
const tabContent = document.querySelector('.tab-content-container');

let currentWidth;

const menu = {
  breakfastMenu: [
    {
      name: 'Cornetto Integrale Vuoto',
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
      price: '1,00€',
    },
    {
      name: 'Conchiglia cioccolato o crema',
      prodAllergens: [2, 5, 13],
      frozen: true,
      price: '1,00€',
    },
    {
      name: 'Cornetto alle Mandorle',
      prodAllergens: [2, 4, 5, 13],
      frozen: true,
      price: '1,00€',
    },
    {
      name: 'Crostata',
      prodAllergens: [2, 5, 13],
      frozen: false,
      price: '1,50€',
    },
    {
      name: 'Saccottino al Cioccolato',
      prodAllergens: [2, 5, 13],
      frozen: false,
      price: '1,00€',
    },
    {
      name: 'Saccottino Mela e Crema',
      prodAllergens: [2, 5, 13],
      frozen: false,
      price: '1,00€',
    },
    {
      name: 'Treccia ai Frutti di Bosco',
      prodAllergens: [2, 5, 13],
      frozen: true,
      price: '1,00€',
    },
    {
      name: 'Treccia alle Noci',
      prodAllergens: [2, 4, 5, 13],
      frozen: true,
      price: '1,00€',
    },
  ],
  aperitifMenu: [
    {
      name: 'Tagliere Salumi & Formaggi',
      prodAllergens: [5],
      frozen: false,
      price: '1,20€',
    },
    {
      name: 'Aperitivo Completo',
      prodAllergens: [1, 2, 4, 5],
      frozen: false,
      price: '1,20€',
    },
    {
      name: 'Aperitivo Base',
      prodAllergens: [13],
      frozen: false,
      price: '1,20€',
    },
    {
      name: 'Nachos con salsa BBQ e olive',
      prodAllergens: [2, 5, 13],
      frozen: false,
      price: '1,20€',
    },
  ],
  iceCreamMenu: [
    {
      name: 'Tagliere Salumi & Formaggi',
      prodAllergens: [5],
      frozen: false,
      price: '1,20€',
    },
    {
      name: 'Aperitivo Completo',
      prodAllergens: [1, 2, 4, 5],
      frozen: false,
      price: '1,20€',
    },
    {
      name: 'Aperitivo Base',
      prodAllergens: [13],
      frozen: false,
      price: '1,20€',
    },
    {
      name: 'Nachos con salsa BBQ e olive',
      prodAllergens: [2, 5, 13],
      frozen: false,
      price: '1,20€',
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
  ],
  displayAllergens(arr) {
    let string = [];
    for (let i = 0; i < arr.length; i++) {
      string.push(this.allergens[arr[i]]);
    }
    return `Allergeni: ${string.join(', ')}`;
  },
};

const eatingsBig = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
];
const eatingsSmall = ['one', 'two', 'three'];

// const removeMenuItems = function () {
//   menuItemDivs.forEach(element => {
//     element.innerText = '';
//   });
// };

const removeMenuItems = function () {
  tabContent.innerHTML = '';
};

const displayFood = function (whichMenu) {
  removeMenuItems();
  for (let y = 0; y < screenSize().length; y++) {
    // let createdDiv = document.querySelector(`.${eatings[y]}`);
    let createdDiv = document.createElement('DIV');
    createdDiv.classList.add(`${screenSize()[y]}`, 'style');
    let header = document.createElement('H5');
    header.classList.add('product');
    let allergens = document.createElement('P');
    allergens.classList.add('allergens');
    let isFrozen = document.createElement('P');
    isFrozen.classList.add('isFrozen');
    let price = document.createElement('P');
    price.classList.add('price');
    header.textContent = whichMenu[y].name;
    allergens.textContent = menu.displayAllergens(whichMenu[y].prodAllergens);
    isFrozen.textContent =
      whichMenu[y].frozen === true
        ? `Prodotto congelato`
        : `Prodotto artigianale`;
    price.textContent = whichMenu[y].price;
    tabContent.appendChild(createdDiv);
    createdDiv.append(header, allergens, isFrozen, price);
    // createdDiv.appendChild(allergens);
    // createdDiv.appendChild(isFrozen);
    // createdDiv.appendChild(price);
  }
};

tabLinks.forEach((button, index) => {
  button.addEventListener('click', () => {
    tabLinks.forEach(a => {
      a.classList.remove('activeTab');
    });
    button.classList.add('activeTab');
    switch (button.textContent) {
      case 'Colazione':
        displayFood(menu.breakfastMenu);
        break;
      case 'Aperitivo':
        displayFood(menu.aperitifMenu);
        break;
      case 'Gelateria':
        displayFood(menu.iceCreamMenu);
        break;
      default:
        break;
    }
  });
});

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

// window.addEventListener('scroll', (event) => {

//     const scrollTop = window.scrollY;
//     var navResizeFunc = function () {
//         let height;

//         if (scrollTop <= 50) {
//           height = 100 - scrollTop;
//         } else {
//           height = 50;
//         }
//         navBar.style.height = `${height}px`;
//       };

//       navResizeFunc(true);
//       window.addEventListener("scroll", navResizeFunc());
// })

window.addEventListener('scroll', reveal);

function reveal() {
  var reveals = document.querySelectorAll('.reveal');

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}
function screenSize() {
  // Get the dimensions of the viewport
  let width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  if (width >= 963) {
    tabContent.classList.remove('parentSmall');
    tabContent.classList.add('parentBig');
    return eatingsBig;
  } else {
    tabContent.classList.add('parentSmall');
    tabContent.classList.remove('parentBig');
    return eatingsSmall;
  }
}
window.addEventListener('load', screenSize);
window.addEventListener('resize', screenSize);
