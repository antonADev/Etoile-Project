const toggleButton = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.navbar-links');
const navBar = document.querySelector('[data-nav]');

const menu = {
  breakfastMenu: [
    {
      name: 'Cornetto Integrale Vuoto',
      prodAllergens: [2, 5, 13],
    },
    {
      name: 'Cornetto Vuoto',
      prodAllergens: [2, 5, 13],
    },
    {
      name: 'Bombolone',
      prodAllergens: [2, 5, 13],
    },
    {
      name: 'Conchiglia cioccolato',
      prodAllergens: [2, 5, 13],
    },
  ],
  allergens: [
    'Anidride solforosa e Solfiti',
    'Arachidi',
    'Cereali e/o Farine',
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

const displayFood = function (whichMenu) {
  for (let y = 0; y < whichMenu.length; y++) {
    let selectedDiv = document.querySelector(`.${eatings[y]}`);
    let header = document.createElement('H5');
    header.classList.add('product');
    let allergens = document.createElement('P');
    allergens.classList.add('allergens');
    header.textContent = whichMenu[y].name;
    allergens.textContent = menu.displayAllergens(whichMenu[y].prodAllergens);
    selectedDiv.appendChild(header);
    selectedDiv.appendChild(allergens);
  }
};
displayFood(menu.breakfastMenu);

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
