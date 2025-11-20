// ===== Recuperar carrito desde localStorage =====
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// ===== Renderizar carrito =====
function renderCarrito() {
  const contenedor = document.getElementById("carrito-items");
  const totalElement = document.getElementById("total");
  contenedor.innerHTML = "";
  let total = 0;

  if (carrito.length === 0) {
    contenedor.innerHTML = "<p style='text-align:center; font-size:1.2rem;'>🛒 Tu carrito está vacío</p>";
    totalElement.textContent = "$0";
    return;
  }

  carrito.forEach((item, index) => {
    total += item.precio;

    const div = document.createElement("div");
    div.classList.add("carrito-item");
    div.innerHTML = `
      <img src="${item.imagen}" alt="${item.nombre}">
      <div class="carrito-item-info">
        <h3>${item.nombre}</h3>
        <p>${item.descripcion}</p>
        <p><strong>$${item.precio}</strong></p>
      </div>
      <button class="btn-remove" onclick="eliminarItem(${index})">
        <i class="fa-solid fa-trash"></i>
      </button>
    `;
    contenedor.appendChild(div);
  });

  totalElement.textContent = "$" + total;
}

// ===== Eliminar producto =====
function eliminarItem(index) {
  carrito.splice(index, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  renderCarrito();
}

// ===== Inicializar =====
renderCarrito();
