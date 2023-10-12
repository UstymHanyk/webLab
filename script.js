class Gemstone {
  constructor(name, carats, price) {
    this.name = name;
    this.carats = carats;
    this.price = price;
  }
}

const main = document.getElementById('main');
const sortBtn = document.getElementById('sort');
const searchInput = document.getElementById('search');


let data = [
  new Gemstone('Diamond', 2, 3342),
  new Gemstone('Emerald', 5, 124),
  new Gemstone('Ruby', 32, 222222)
];

function updateDOM(providedData = data) {
  main.innerHTML = '<h2>Gemstone List</h2>';

  providedData.forEach((item, index) => {
    const element = document.createElement('div');
    element.classList.add('gemstone');
    element.innerHTML = `
      <strong>${item.name}</strong> - Carats: ${item.carats}, Price: ${item.price}
      <button class="edit-button" onclick="redirectToEditPage(${index})">Edit</button>
    `;
    main.appendChild(element);
  });
}

function redirectToEditPage(index) {
  window.location.href = `edit_gemstone.html?index=${index}`;
}



function sortByPrice() {
  data.sort((a, b) => a.price - b.price);
  updateDOM();
}

function searchGemstone() {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredGemstones = data.filter(gemstone =>
    gemstone.name.toLowerCase().includes(searchTerm)
  );
  updateDOM(filteredGemstones);
}

function loadGemstones() {
  const gemstones = JSON.parse(localStorage.getItem('gemstones')) || [];
  data = gemstones.map(gemstone => new Gemstone(gemstone.name, gemstone.carats, gemstone.price));
  updateDOM();
}

function init() {
  sortBtn.addEventListener('click', sortByPrice);
  searchInput.addEventListener('input', searchGemstone);

  loadGemstones();
}

init();
