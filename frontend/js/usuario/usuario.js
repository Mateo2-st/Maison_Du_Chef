document.addEventListener("DOMContentLoaded", () => {

  // ===== MODAL =====
  function mostrarModal(mensaje) {
    const modal = document.getElementById("modalMensaje");
    const texto = document.getElementById("modalTexto");

    texto.textContent = mensaje;
    modal.classList.remove("oculto");
  }

  document.getElementById("modalCerrar").addEventListener("click", () => {
    document.getElementById("modalMensaje").classList.add("oculto");
  });


  // ===== SELECTOR =====
  const btnSeleccionar = document.getElementById("btnSeleccionarOpcion");
  const listaOpciones = document.getElementById("listaOpciones");
  const opcionSeleccionadaTexto = document.getElementById("opcionSeleccionada");
  const areaEscribir = document.getElementById("areaEscribir");

  btnSeleccionar.addEventListener("click", () => {
    listaOpciones.classList.toggle("oculto");
  });

  const opciones = listaOpciones.querySelectorAll("li");

  opciones.forEach(opcion => {
    opcion.addEventListener("click", () => {
      opciones.forEach(o => o.classList.remove("seleccionado"));
      opcion.classList.add("seleccionado");

      const seleccion = opcion.getAttribute("data-opcion");
      opcionSeleccionadaTexto.textContent = "Opción seleccionada: " + seleccion;

      listaOpciones.classList.add("oculto");
      areaEscribir.classList.remove("oculto");
    });
  });


  // ===== BOTÓN ENVIAR =====
  document.getElementById("btnEnviar").addEventListener("click", () => {
    const mensaje = document.getElementById("mensajeUsuario").value.trim();

    if (!mensaje) {
      mostrarModal("⚠️ Por favor escribe un mensaje antes de enviar.");
      return;
    }

    mostrarModal("✅ Mensaje enviado con éxito. Su solicitud será respondida en las próximas 2 horas.");

    document.getElementById("mensajeUsuario").value = "";
  });


  // ===== ATENCIÓN PERSONALIZADA =====
  document.getElementById("btnPersonalizada").addEventListener("click", () => {
    mostrarModal("👩‍💼 Atención personalizada solicitada. Un asesor te contactará en los próximos 120 minutos.");
  });


  // ===== CHAT =====
  const chatBox = document.getElementById("chatBox");
  const chatMensajes = document.getElementById("chatMensajes");
  const chatInput = document.getElementById("chatInput");
  const chatEnviar = document.getElementById("chatEnviar");

  document.getElementById("btnAbrirChat").addEventListener("click", () => {
    chatBox.classList.toggle("oculto");
  });

  chatEnviar.addEventListener("click", () => {
    const texto = chatInput.value.trim();

    if (texto === "") return;

    // mensaje usuario
    const pUser = document.createElement("p");
    pUser.classList.add("user");
    pUser.textContent = "Tú: " + texto;
    chatMensajes.appendChild(pUser);

    chatInput.value = "";
    chatMensajes.scrollTop = chatMensajes.scrollHeight;

    // respuesta bot
    setTimeout(() => {
      const pBot = document.createElement("p");
      pBot.classList.add("bot");
      pBot.textContent = "🤖 Bot: Gracias por tu mensaje, pronto un asesor real continuará la conversación.";
      chatMensajes.appendChild(pBot);
      chatMensajes.scrollTop = chatMensajes.scrollHeight;
    }, 1000);
  });


  // --------- CARRITO ARRIBA ---------
  document.getElementById("openCartFromHeader").addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "carrito.html";
  });

});

