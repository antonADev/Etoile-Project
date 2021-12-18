const toggleButton = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.navbar-links');
const navBar = document.querySelector('[data-nav]');
const tabLinks = document.querySelectorAll('.tablinks');
const menuItemDivs = document.querySelectorAll('.style');

const menu = {
  breakfastMenu: [
    {
      name: 'Cornetto Integrale Vuoto',
      prodAllergens: [2, 5, 13],
      frozen: true,
    },
    {
      name: 'Cornetto Vuoto',
      prodAllergens: [2, 5, 13],
      frozen: true,
    },
    {
      name: 'Bombolone',
      prodAllergens: [2, 5, 13],
      frozen: true,
    },
    {
      name: 'Conchiglia cioccolato',
      prodAllergens: [2, 5, 13],
      frozen: true,
    },
  ],
  aperitifMenu: [
    {
      name: 'Tagliere Salumi & Formaggi',
      prodAllergens: [5],
      frozen: false,
    },
    {
      name: 'Aperitivo Completo',
      prodAllergens: [1, 2, 4, 5],
      frozen: false,
    },
    {
      name: 'Aperitivo Base',
      prodAllergens: [13],
      frozen: false,
    },
    {
      name: 'Nachos con salsa BBQ e olive',
      prodAllergens: [2, 5, 13],
      frozen: false,
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

const eatings = ['one', 'two', 'three', 'four'];

const removeMenuItems = function () {
  menuItemDivs.forEach(element => {
    element.innerHTML = '';
  });
};

const displayFood = function (whichMenu) {
  removeMenuItems();
  for (let y = 0; y < whichMenu.length; y++) {
    let selectedDiv = document.querySelector(`.${eatings[y]}`);
    let header = document.createElement('H5');
    header.classList.add('product');
    let allergens = document.createElement('P');
    allergens.classList.add('allergens');
    let isFrozen = document.createElement('P');
    isFrozen.classList.add('isFrozen');
    header.textContent = whichMenu[y].name;
    allergens.textContent = menu.displayAllergens(whichMenu[y].prodAllergens);
    isFrozen.textContent =
      whichMenu[y].frozen === true
        ? `Prodotto congelato`
        : `Prodotto artigianalmente`;
    selectedDiv.appendChild(header);
    selectedDiv.appendChild(allergens);
    selectedDiv.appendChild(isFrozen);
  }
};

tabLinks.forEach(button => {
  button.addEventListener('click', () => {
    console.log(button.textContent);
    switch (button.textContent) {
      case 'Colazione':
        displayFood(menu.breakfastMenu);
        break;
      case 'Aperitivo':
        displayFood(menu.aperitifMenu);
        break;
      case 'Gelateria':
        displayFood(menu.iceCream);
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
