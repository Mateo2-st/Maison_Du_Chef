function cerrarSesion() {
  alert("Has cerrado sesión correctamente.");
  window.location.href = "index.html";
}

function confirmarCambioCorreo() {
  const actual = document.getElementById("correo-actual").value;
  const nuevo = document.getElementById("correo-nuevo").value;

  if (!actual || !nuevo) {
    alert("⚠️ Por favor completa todos los campos.");
    return;
  }

  if (actual === nuevo) {
    alert("❌ El nuevo correo no puede ser igual al actual.");
    return;
  }

  alert("✅ Tu correo ha sido actualizado con éxito.");
  window.location.href = "index.html";
}
