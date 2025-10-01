document.addEventListener("DOMContentLoaded", () => {
  const btnSeleccionar = document.getElementById("btnSeleccionarOpcion");
  const listaOpciones = document.getElementById("listaOpciones");
  const opcionSeleccionadaTexto = document.getElementById("opcionSeleccionada");
  const areaEscribir = document.getElementById("areaEscribir");

  let opcionSeleccionada = null;

  // Abrir/cerrar lista
  btnSeleccionar.addEventListener("click", () => {
    listaOpciones.classList.toggle("oculto");
  });

  // Seleccionar opción
  const opciones = listaOpciones.querySelectorAll("li");
  opciones.forEach(opcion => {
    opcion.addEventListener("click", () => {
      opciones.forEach(o => o.classList.remove("seleccionado"));
      opcion.classList.add("seleccionado");
      opcionSeleccionada = opcion.getAttribute("data-opcion");
      opcionSeleccionadaTexto.textContent = "Opción seleccionada: " + opcionSeleccionada;
      listaOpciones.classList.add("oculto");
      areaEscribir.classList.remove("oculto");
    });
  });

  // Botón enviar
  document.getElementById("btnEnviar").addEventListener("click", () => {
    const mensaje = document.getElementById("mensajeUsuario").value.trim();
    if (!mensaje) {
      alert("⚠️ Por favor escribe un mensaje antes de enviar.");
    } else {
      alert("✅ Mensaje enviado con éxito. Su solicitud será resuelta en las próximas 2 horas.");
      document.getElementById("mensajeUsuario").value = "";
    }
  });

  // Botón atención personalizada
  document.getElementById("btnPersonalizada").addEventListener("click", () => {
    alert("✅ Solicitud enviada con éxito. En las próximas 2 horas un asesor se comunicará contigo por el chat.");
  });

  // Botón abrir chat
  const chatBox = document.getElementById("chatBox");
  document.getElementById("btnAbrirChat").addEventListener("click", () => {
    chatBox.classList.toggle("oculto");
  });

  // Chat básico
  const chatMensajes = document.getElementById("chatMensajes");
  const chatInput = document.getElementById("chatInput");
  const chatEnviar = document.getElementById("chatEnviar");

  chatEnviar.addEventListener("click", () => {
    const texto = chatInput.value.trim();
    if (texto !== "") {
      // mensaje usuario
      const pUser = document.createElement("p");
      pUser.classList.add("user");
      pUser.textContent = "Tú: " + texto;
      chatMensajes.appendChild(pUser);

      chatInput.value = "";
      chatMensajes.scrollTop = chatMensajes.scrollHeight;

      // respuesta bot automática
      setTimeout(() => {
        const pBot = document.createElement("p");
        pBot.classList.add("bot");
        pBot.textContent = "🤖 Bot: Gracias por tu mensaje, pronto un asesor real continuará la conversación.";
        chatMensajes.appendChild(pBot);
        chatMensajes.scrollTop = chatMensajes.scrollHeight;
      }, 1000);
    }
  });

  // Acción carrito arriba
  document.getElementById("openCartFromHeader").addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "carrito.html";
  });
});
