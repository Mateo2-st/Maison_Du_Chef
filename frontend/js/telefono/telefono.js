function cerrarSesion() {
  alert("Has cerrado sesión correctamente.");
  window.location.href = "index.html";
}

function confirmarCambioTelefono() {
  const actual = document.getElementById("tel-actual").value;
  const nuevo = document.getElementById("tel-nuevo").value;

  if (!actual || !nuevo) {
    alert("⚠️ Por favor completa todos los campos.");
    return;
  }

  if (actual === nuevo) {
    alert("❌ El nuevo teléfono no puede ser igual al actual.");
    return;
  }

  alert("📩 Se ha enviado un mensaje de verificación al nuevo número.");
  window.location.href = "index.html";
}
