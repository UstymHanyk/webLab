class Gemstone {
    constructor(name, carats, price) {
      this.name = name;
      this.carats = carats;
      this.price = price;
    }
  }
  
  const main = document.getElementById('main');
  const addGemstoneBtn = document.getElementById('add-gemstone');
  const sortBtn = document.getElementById('sort');
  const gemstoneNameInput = document.getElementById('gemstone-name');
  const gemstoneCaratsInput = document.getElementById('gemstone-carats');
  const gemstonePriceInput = document.getElementById('gemstone-price');
  const searchInput = document.getElementById('search');
  
  let data = [
    new Gemstone('Diamond', 2, 3342),
    new Gemstone('Emerald', 5, 124),
    new Gemstone('Ruby', 32, 222222)
  ];
  
  function updateDOM(providedData = data) {
    main.innerHTML = '<h2>Gemstone List</h2>';
  
    providedData.forEach(item => {
      const element = document.createElement('div');
      element.classList.add('gemstone');
      element.innerHTML = `<strong>${item.name}</strong> - Carats: ${item.carats}, Price: ${item.price}`;
      main.appendChild(element);
    });
  }
  
  function sortByPrice() {
    data.sort((a, b) => a.price - b.price);
    updateDOM();
  }
  
  function addGemstone() {
    const name = gemstoneNameInput.value;
    const carats = parseFloat(gemstoneCaratsInput.value);
    const price = parseFloat(gemstonePriceInput.value);
  
    if (!isNaN(carats) && !isNaN(price) && name) {
      const newGemstone = new Gemstone(name, carats, price);
      data.push(newGemstone);
      updateDOM();
      
      gemstoneNameInput.value = '';
      gemstoneCaratsInput.value = '';
      gemstonePriceInput.value = '';
    } else {
      alert('Invalid input. Please provide valid gemstone name, carats, and price.');
    }
  }
  
  function searchGemstone() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredGemstones = data.filter(gemstone =>
      gemstone.name.toLowerCase().includes(searchTerm)
    );
    updateDOM(filteredGemstones);
  }
  
  addGemstoneBtn.addEventListener('click', addGemstone);
  sortBtn.addEventListener('click', sortByPrice);
  searchInput.addEventListener('input', searchGemstone);
  
  updateDOM();
  