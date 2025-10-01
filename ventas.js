document.addEventListener("DOMContentLoaded", () => {
  const btnSeleccionarMes = document.getElementById("btnSeleccionarMes");
  const listaMeses = document.getElementById("listaMeses");
  const mesSeleccionadoTexto = document.getElementById("mesSeleccionado");
  let mesSeleccionado = null;

  // Mostrar/ocultar lista de meses
  btnSeleccionarMes.addEventListener("click", () => {
    listaMeses.classList.toggle("oculto");
  });

  // Selección de mes
  const meses = listaMeses.querySelectorAll("li");
  meses.forEach(mes => {
    mes.addEventListener("click", () => {
      meses.forEach(m => m.classList.remove("seleccionado"));
      mes.classList.add("seleccionado");
      mesSeleccionado = mes.getAttribute("data-mes");
      mesSeleccionadoTexto.textContent = "Mes seleccionado: " + mesSeleccionado;
      listaMeses.classList.add("oculto");
    });
  });

  // Botón informe administrador
  document.getElementById("btnAdmin").addEventListener("click", () => {
    if (!mesSeleccionado) {
      alert("⚠️ Selecciona un mes antes de generar el informe.");
    } else {
      alert("✅ Informe enviado con éxito al correo (Administrador).");
    }
  });

  // Botón informe vendedores
  document.getElementById("btnVendedores").addEventListener("click", () => {
    if (!mesSeleccionado) {
      alert("⚠️ Selecciona un mes antes de generar el informe.");
    } else {
      alert("✅ Informe enviado con éxito a los vendedores.");
    }
  });

  // Acción del carrito en la barra superior
  document.getElementById("openCartFromHeader").addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "carrito.html";
  });
});
