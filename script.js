const main = document.getElementById('main');
const sortBtn = document.getElementById('sort');
const searchInput = document.getElementById('search');
let gemstonesData = [];  // Store all gemstones

function updateDOM() {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredGemstones = gemstonesData.filter(item => item.name.toLowerCase().includes(searchTerm));

  main.innerHTML = '<h2>Gemstone List</h2>';

  filteredGemstones.forEach(item => {
    const element = document.createElement('div');
    element.classList.add('gemstone');
    element.innerHTML = `
      <strong>${item.name}</strong> - Carats: ${item.carats}, Price: ${item.price}
      <button class="edit-button" onclick="redirectToEditPage(${item.id})">Edit</button>
      <button class="remove-button" onclick="removeGemstone(${item.id})">Remove</button>
    `;
    main.appendChild(element);
  });
}

function redirectToEditPage(gemstoneId) {
  window.location.href = `edit_gemstone.html?id=${gemstoneId}`;
}

function redirectToAddPage() {
  window.location.href = `add_gemstone.html`;
}

function loadGemstones() {
  fetch('http://localhost:5000/gemstones')
    .then(response => response.json())
    .then(data => {
      gemstonesData = data.gemstones;  // Store gemstones data
      updateDOM();  // Initial rendering
    })
    .catch(error => console.error('Error fetching gemstones:', error));
}

function removeGemstone(gemstoneId) {
  fetch(`http://localhost:5000/gemstones/${gemstoneId}`, {
    method: 'DELETE'
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Remove the gemstone from gemstonesData
      gemstonesData = gemstonesData.filter(item => item.id !== gemstoneId);

      // Update the DOM to reflect the changes
      updateDOM();
    })
    .catch(error => console.error('Error deleting gemstone:', error));
}


function init() {
  sortBtn.addEventListener('click', () => {
    const sortedGemstones = gemstonesData.slice().sort((a, b) => a.price - b.price);
    updateDOM(sortedGemstones);
  });

  searchInput.addEventListener('input', updateDOM);

  loadGemstones();
}

init();
