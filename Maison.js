document.addEventListener('DOMContentLoaded', () => {

  /* ---------------------------
     Carrusel (simple, 3s)
     --------------------------- */
  let currentIndex = 0;
  const carousel = document.querySelector(".carousel-images");
  const images = document.querySelectorAll(".carousel-images img");
  const totalImages = images.length;

  if (carousel && totalImages > 0) {
    setInterval(() => {
      currentIndex = (currentIndex + 1) % totalImages;
      carousel.style.transition = "transform 0.6s ease-in-out";
      carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }, 3000);
  }

  /* ---------------------------
     Datos (usa tus nombres de archivo de imagen locales)
     --------------------------- */
  const GLOBAL_CATEGORIES = [
    'Desayunos','Almuerzos','Carnes','Pastas','Bebidas','Comida rápida',
    'Pescados','Postres','Picadas','Ensaladas','Vegetariana'
  ];

  const RESTAURANTS = [
    {
      id: 1,
      name: 'Lasaña de Carne con salsa bechamel',
      description: 'Deliciosa lasaña casera con carne molida, salsa bechamel y queso gratinado.',
      image: '../Imagenes catalogo y logos/Lasaña.jpg',
      logo: '../Imagenes catalogo y logos/Logo restaurant.jpg',
      time: '51 min',
      price: '$14.900',
      rating: 3.8,
      categories: ['Almuerzos','Pizzas'],
      dishes: ['Lasaña clásica - $14.900', 'Lasaña vegetariana - $13.400']
    },
    {
      id: 2,
      name: 'Pizza finas hierbas',
      description: 'Pizza artesanal con mezcla de quesos y toque de finas hierbas.',
      image: '../Imagenes catalogo y logos/pizzas.jpg',
      logo: '../Imagenes catalogo y logos/Imagenes catalogo y logos/Logo Savor.jpg',
      time: '25 min',
      price: '$22.500',
      rating: 4.8,
      categories: ['Almuerzos','Pastas','Comida rápida'],
      dishes: ['Pizza Margarita - $22.500', 'Pizza Pepperoni - $25.000']
    },
    {
      id: 3,
      name: 'Bife a la Parrilla con Ajo y Romero',
      description: 'Jugoso corte de res a la parrilla con especias frescas.',
      image: '../Imagenes catalogo y logos/carne.jpg',
      logo: '../Imagenes catalogo y logos/Logo como en casa.jpg',
      time: '25 min',
      price: '$23.900',
      rating: 4.1,
      categories: ['Carnes','Almuerzos'],
      dishes: ['Bife clásico - $23.900', 'Bife + guarnición - $26.900']
    },
    {
      id: 4,
      name: 'Arepa Criolla de Carne',
      description: 'Arepa tradicional rellena de carne desmechada y especias.',
      image: '../Imagenes catalogo y logos/Arepa de carne.jpg',
      logo: '../Imagenes catalogo y logos/Logo horas.jpg',
      time: '30 min',
      price: '$4.900',
      rating: 4.0,
      categories: ['Desayunos','Comida rápida'],
      dishes: ['Arepa rellena - $4.900', 'Arepa combo - $7.500']
    },
    {
      id: 5,
      name: 'Bandeja Paisa Tradicional',
      description: 'Completa bandeja paisa con todo el sabor tradicional.',
      image: '../Imagenes catalogo y logos/Bandeja Paisa.jpg',
      logo: '../Imagenes catalogo y logos/Logo como en casa.jpg',
      time: '30 min',
      price: '$21.900',
      rating: 4.0,
      categories: ['Almuerzos','Picadas'],
      dishes: ['Bandeja Paisa - $21.900']
    },
    {
      id: 6,
      name: 'Empanadas Rellenas al Estilo Criollo',
      description: 'Empanadas crocantes rellenas de carne y papa con especias tradicionales.',
      image: '../Imagenes catalogo y logos/Empañadas.jpg',
      logo: '../Imagenes catalogo y logos/Logo bendita.jpg',
      time: '30 min',
      price: '$4.900',
      rating: 4.0,
      categories: ['Comida rápida','Picadas'],
      dishes: ['Empanada de carne - $4.900', 'Empanada combo - $12.000']
    },
    {
      id: 7,
      name: 'Ensalada fria',
      description: '"Ensalada fría cremosa con pasta, maíz dulce, pepino y zanahoria rallada, ideal como acompañamiento refrescante o plato ligero."',
      image: '../Imagenes catalogo y logos/Ensalada.jpg',
      logo: '../Imagenes catalogo y logos/Logo natural.jpg',
      time: '30 min',
      price: '$14.900',
      rating: 4.0,
      categories: ['Almuerzos','Ensaladas','Pastas'],
      dishes: ['Ensalada fría clásica - $6.500', 'Ensalada mixta con pollo - $8.900', 'Combo ensalada + bebida - $11.000']
    },
    {
      id: 8,
      name: 'Pasta con albóndigas',
      description: 'Deliciosa pasta bañada en salsa de tomate casera, acompañada de jugosas albóndigas sazonadas al estilo tradicional',
      image: '../Imagenes catalogo y logos/pasta.jpg',
      logo: '../Imagenes catalogo y logos/Logo Savor.jpg',
      time: '30 min',
      price: '$24.900',
      rating: 4.0,
      categories: ['Almuerzos','Pastas'],
      dishes: ['Pasta al pesto con queso - $7.900', 'Pasta bolognesa clásica - $8.500', 'Pasta con vegetales salteados - $7.800', 'Pasta con camarones en salsa blanca - $9.500']
    },
    {
      id: 9,
      name: 'pollo en salsa finas hierbas',
      description: 'Empanadas crocantes rellenas de carne y papa con especias tradicionales.',
      image: '../Imagenes catalogo y logos/pollo en salsa.jpg',
      logo: '../Imagenes catalogo y logos/Logo restaurant.jpg',
      time: '30 min',
      price: '$14.900',
      rating: 4.0,
      categories: ['Almuerzos'],
      dishes: ['pollo en salsa de chanpiñones- $24.000', 'pollo con salsa bechamel - $12.000']
    },
    {
      id: 10,
      name: 'Hamburguesa de pollo apanado',
      description: 'Empanadas crocantes rellenas de carne y papa con especias tradicionales.',
      image: '../Imagenes catalogo y logos/hamburguesa.jpg',
      logo: '../Imagenes catalogo y logos/Logo comer.jpg',
      time: '25 min',
      price: '$20000',
      rating: 5.0,
      categories: ['Almuerzos','Comida rápida'],
      dishes: ['Hamburguesa doble carne - $16.000', 'Hamburguesa mexicana - $20.000', 'Hamburguesa sencilla  - $10.000']
    },
    {
      id: 11,
      name: 'Granola',
      description: 'Crujiente granola artesanal servida con cremoso yogur griego y arándanos frescos. Un desayuno equilibrado, natural y lleno de sabor',
      image: '../Imagenes catalogo y logos/granola.jpg',
      logo: '../Imagenes catalogo y logos/Logo tierno.jpg',
      time: '10 min',
      price: '$7000',
      rating: 4.0,
      categories: ['Ensaladas','Desayunos', 'Postres'],
      dishes: ['Granola con yogurt - $4000', 'Cereal dulce con kumis - $6000', 'Cereal Sin azucar con yogurt griego - $6000']
    },
    {
      id: 12,
      name: 'Almuezo del dia',
      description: 'Arros, pure de papa, y carne guisada',
      image: '../Imagenes catalogo y logos/brocoli.jpg',
      logo: '../Imagenes catalogo y logos/Logo Savor.jpg',
      time: '30 min',
      price: '$15.000',
      rating: 3.0,
      categories: ['Almuerzos'],
      dishes: ['Almuerzo ejecutivo con pechuga a la plancha- $22.000', 'Almuerzo del dia con pollo sudado - $14.500']
    },
    {
      id: 13,
      name: 'Granola con frutos rojos',
      description: 'Granola con yogurt griego y frutos rojos',
      image: '../Imagenes catalogo y logos/cereal.jpg',
      logo: '../Imagenes catalogo y logos/Logo restaurant.jpg',
      time: '5 min',
      price: '$10.000',
      rating: 5.0,
      categories: ['Ensaladas','Desayunos', 'Postres'],
      dishes: ['Cereal con yogurt natural y frutos amarillos- $14.000', 'Granola de mani con kumis y fruta - $16.000']
    },
    {
      id: 14,
      name: 'Malteada de Oreo',
      description: 'Malteada de oreo con trozos de galleta, salsa de chocolate y crema chantilly',
      image: '../Imagenes catalogo y logos/Bebida oreo.jpg',
      logo: '../Imagenes catalogo y logos/Logo mery.jpg',
      time: '14 min',
      price: '$11.000',
      rating: 3.0,
      categories: ['Bebidas','Postres'],
      dishes: ['Malteada de frutos amarillos - $16.000', 'Malteada de piña con manzana - $12.000','Malteada de frutos rojos con crema chantilly - $20.000']
    },
    {
      id: 15,
      name: 'Grape Cream Bubble Slush',
      description: 'Batido de uva dulce, granizado de crema de vainilla, perlas de tapioca masticables',
      image: '../Imagenes catalogo y logos/Bebida morada.jpg',
      logo: '../Imagenes catalogo y logos/Logo horas.jpg',
      time: '20 min',
      price: '$14.000',
      rating: 5.0,
      categories: ['Bebidas','Postres'],
      dishes: [' Boba Milk Tea - $15.000', 'pastel pink strawberry bubble tea - $12.000', ' mango milk tea - $15.000','Pineapple Milk Tea  - $16.000']
    },
    {
      id: 16,
      name: 'Picada de carnes',
      description: 'Picada con carne de res, papa, patacones, chorizo, y salsas',
      image: '../Imagenes catalogo y logos/Picada.jpg',
      logo: '../Imagenes catalogo y logos/Logo comer.jpg',
      time: '40 min',
      price: '$28.000',
      rating: 5.0,
      categories: ['Almuerzos', 'Picadas', 'Carnes'],
      dishes: ['Picada de carne de res y cerdo mediana - $30.000', 'Picada grande - $42.000']
    },
    {
      id: 17,
      name: 'Picada Familiar',
      description: 'Picada familiar con carne de res, carne de cerdo, chicharron, platano, chorizo, papa, arepas, mazorca, y rellena',
      image: '../Imagenes catalogo y logos/Picada familiar.jpg',
      logo: '../Imagenes catalogo y logos/Logo como en casa.jpg',
      time: '30 min',
      price: '$80.000',
      rating: 5.2,
      categories: ['Almuerzos', 'Picadas', 'Carnes'],
      dishes: ['Picada pequeña - $26.000', 'Picada duo - $32.000']
    },
    {
      id: 18,
      name: 'Casuela de mariscos',
      description: 'Casuela de mariscos',
      image: '../Imagenes catalogo y logos/casuela.jpg',
      logo: '../Imagenes catalogo y logos/Logo bendita.jpg',
      time: '60 min',
      price: '$42.000',
      rating: 4.5,
      categories: ['Almuerzos', 'Pescados'],
      dishes: ['Casuela de mariscos picante - $54.000', 'Casuela de mariscos grande - $62.000', 'Casuela de mariscos pequeña - $32.000', 'Casuela de mariscos tradicional - $55.000']
    },
    {
      id: 19,
      name: 'Mojarra',
      description: 'Almuerzo ejecutivo con arroz, platano, mojarra asada, y ensalada',
      image: '../Imagenes catalogo y logos/mojarra.jpg',
      logo: '../Imagenes catalogo y logos/Logo restaurant.jpg',
      time: '60 min',
      price: '$31.000',
      rating: 5.0,
      categories: ['Almuerzos', 'Pescados'],
      dishes: ['Bagre en salsa- $20.000', 'Bagre en salsa de camarones - $33.000', 'Salmon al ajillo - $43.000']
    },
    {
      id: 20,
      name: 'Perro caliente con papas',
      description: 'Delicioso perro caliente con papas a la francesa bañado en queso chedar y salsas de la casa',
      image: '../Imagenes catalogo y logos/perro.jpg',
      logo: '../Imagenes catalogo y logos/Logo comer.jpg',
      time: '20 min',
      price: '$19.000',
      rating: 3.0,
      categories: ['Almuerzos', 'Comida rápida'],
      dishes: ['Perro caliente doble- $21.000', 'Perro caliente mexicano - $22.000']
    },
    {
      id: 21,
      name: 'Caldo de costilla',
      description: ' Caldo de costilla',
      image: '../Imagenes catalogo y logos/caldo.jpg',
      logo: '../Imagenes catalogo y logos/Logo natural.jpg',
      time: '20 min',
      price: '$14.000',
      rating: 4.0,
      categories: ['Almuerzos', 'Desayunos'],
      dishes: ['Caldo de costilla con arepa de queso y chocolate - $20.000', 'Caldo de pescado - $15.000','Caldo de pajarilla - $15.000']
    },
    {
      id: 22,
      name: 'Huevos con arepa, chocolate y queso ',
      description: 'Huevos pericos con arepa de queso, chocolate tradicional, y queso campesino',
      image: '../Imagenes catalogo y logos/huevo.jpg',
      logo: '../Imagenes catalogo y logos/Logo natural.jpg',
      time: '30 min',
      price: '$18.000',
      rating: 4.0,
      categories: ['Almuerzos', 'Desayunos'],
      dishes: ['Huevos rancheros con cafe y pan - $15.000', 'Huevos pericos con queso doble crema, arepa y bebida al gusto - $18.000']
    },
    {
      id: 23,
      name: 'Almuerzo vegetariano',
      description: 'Almuerzo vegetariano con lentejas, berenjenas asadas, espinaca pimenton, arroz y trozos de gluten ',
      image: '../Imagenes catalogo y logos/vegetariano.jpg',
      logo: '../Imagenes catalogo y logos/Logo tierno.jpg',
      time: '30 min',
      price: '$20.900',
      rating: 5.0,
      categories: ['Almuerzos' , 'Vegetariana'],
      dishes: ['Almuerzo casero con gluten - $24.000', 'Almuerzo mix de granos - $24.000']
    },
    {
      id: 24,
      name: 'Tres Leches',
      description: 'Porcion de postre tres leches con fresas',
      image: '../Imagenes catalogo y logos/leches.jpg',
      logo: '../Imagenes catalogo y logos/Logo mery.jpg',
      time: '10 min',
      price: '$10.000',
      rating: 4.0,
      categories: ['Postres'],
      dishes: ['Tarta de frutos rojos - $12.000', 'brownie de arequipe - $10.000']
    }

  ];

  /* ---------------------------
     Render categorías (barra)
     --------------------------- */
  function renderCategories() {
    const wrapper = document.getElementById('categoriesWrapper');
    if (!wrapper) return;
    wrapper.innerHTML = '';

    const allPill = document.createElement('button');
    allPill.className = 'category-pill active';
    allPill.textContent = 'Todos';
    allPill.dataset.cat = 'Todos';
    allPill.addEventListener('click', () => filterByCategory('Todos'));
    wrapper.appendChild(allPill);

    GLOBAL_CATEGORIES.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = 'category-pill';
      btn.textContent = cat;
      btn.dataset.cat = cat;
      btn.addEventListener('click', () => filterByCategory(cat));
      wrapper.appendChild(btn);
    });
  }

  /* ---------------------------
     Render restaurantes (grid)
     --------------------------- */
  function renderRestaurants(list) {
    const grid = document.getElementById('restaurantsGrid');
    if (!grid) return;
    grid.innerHTML = '';

    list.forEach(r => {
      const card = document.createElement('article');
      card.className = 'restaurant-card';
      card.innerHTML = `
        <img class="card-image" src="${r.image}" alt="${r.name}">
        <div class="card-body">
          <img class="logo-small" src="${r.logo || r.image}" alt="logo">
          <div class="card-info">
            <div class="card-title">${r.name}</div>
            <div class="card-meta">
              <span>${r.time}</span>
              <span>•</span>
              <span>${r.price}</span>
            </div>
          </div>
          <div class="rating-badge">${r.rating}</div>
        </div>
      `;
      card.addEventListener('click', () => openRestaurantModal(r.id));
      grid.appendChild(card);
    });
  }

  /* ---------------------------
     Filtrado por categoría
     --------------------------- */
  function filterByCategory(cat) {
    document.querySelectorAll('.category-pill').forEach(el => {
      if (el.dataset.cat === cat) el.classList.add('active');
      else el.classList.remove('active');
    });

    if (cat === 'Todos') {
      renderRestaurants(RESTAURANTS);
      return;
    }
    const filtered = RESTAURANTS.filter(r => r.categories.includes(cat));
    renderRestaurants(filtered);
  }

  /* ---------------------------
     Modal (abrir / cerrar)
     --------------------------- */
  const modal = document.getElementById("restaurantModal");
  const modalOverlay = modal ? modal.querySelector(".modal-overlay") : null;
  const modalCloseBtn = document.getElementById("modalCloseBtn");

  function openRestaurantModal(id) {
    const r = RESTAURANTS.find(rest => rest.id === id);
    if (!r || !modal) return;

    const modalBanner = document.getElementById("modalImage");
    if (modalBanner) modalBanner.src = r.image;

    const modalLogo = document.getElementById("modalLogo");
    if (modalLogo) modalLogo.src = r.image;

    document.getElementById("modalName").textContent = r.name;
    document.getElementById("modalMeta").textContent = `${r.time} • ${r.price} • ⭐ ${r.rating}`;
    document.getElementById("modalDescription").textContent = r.description || '';

    const body = document.getElementById("modalBody");
    const catsHtml = (r.categories || []).map(c => `<span class="category-pill">${c}</span>`).join('');
    const dishesHtml = (r.dishes || []).map(d => {
      const [dishName, priceText] = d.split(' - $');
      return `
        <li>
          ${dishName} - $${priceText}
          <button class="add-to-cart" 
            data-name="${dishName}" 
            data-price="${priceText}" 
            data-img="${r.image}">
            Agregar
          </button>
        </li>`;
    }).join('');

    body.innerHTML = `
      <div class="modal-categories">${catsHtml}</div>
      <h3>Platos populares</h3>
      <ul>${dishesHtml}</ul>
    `;

    // botones de agregar al carrito
    body.querySelectorAll('.add-to-cart').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const name = btn.dataset.name;
        const price = parseFloat(btn.dataset.price.replace('.', '').replace(',', '.'));
        const img = btn.dataset.img;
        addToCart({ name, price, img });
      });
    });

    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
  }

  function closeRestaurantModal() {
    if (!modal) return;
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeRestaurantModal);
  if (modalOverlay) modalOverlay.addEventListener("click", closeRestaurantModal);

  /* ---------------------------
     Carrito (localStorage)
     --------------------------- */
  function addToCart(item) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert("Producto agregado al carrito");
  }

  /* Botón flotante de carrito */
  const cartBtn = document.createElement('button');
  cartBtn.textContent = "🛒";
  cartBtn.id = "cartBtn";
  cartBtn.style.position = "fixed";
  cartBtn.style.bottom = "20px";
  cartBtn.style.right = "20px";
  cartBtn.style.zIndex = "4000";
  cartBtn.style.fontSize = "24px";
  cartBtn.style.padding = "12px 16px";
  cartBtn.style.borderRadius = "50%";
  cartBtn.style.border = "none";
  cartBtn.style.background = "#ff9800";
  cartBtn.style.color = "#fff";
  cartBtn.style.cursor = "pointer";
  document.body.appendChild(cartBtn);

  cartBtn.addEventListener('click', () => {
    window.location.href = "carrito.html";
  });

  /* ---------------------------
     Búsqueda rápida
     --------------------------- */
  const searchInput = document.querySelector('.search-bar');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase();
      const filtered = RESTAURANTS.filter(r =>
        r.name.toLowerCase().includes(term) ||
        r.categories.some(cat => cat.toLowerCase().includes(term))
      );
      renderRestaurants(filtered);
    });
  }

  /* ---------------------------
     INIT
     --------------------------- */
  renderCategories();
  renderRestaurants(RESTAURANTS);

}); // DOMContentLoaded end
