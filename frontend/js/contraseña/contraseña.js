function cerrarSesion() {
  alert("Has cerrado sesión correctamente.");
  window.location.href = "index.html";
}

function confirmarCambio() {
  const anterior = document.getElementById("anterior").value;
  const nueva = document.getElementById("nueva").value;
  const confirmar = document.getElementById("confirmar").value;

  if (!anterior || !nueva || !confirmar) {
    alert("⚠️ Por favor completa todos los campos.");
    return;
  }
  if (nueva !== confirmar) {
    alert("❌ Las contraseñas no coinciden.");
    return;
  }

  alert("✅ Contraseña cambiada con éxito.");
}

function mostrarOlvide() {
  document.getElementById("form-principal").style.display = "none";
  document.getElementById("form-olvide").style.display = "block";
}

function restaurar() {
  const nombre = document.getElementById("nombre").value;
  const apellidos = document.getElementById("apellidos").value;
  const correo = document.getElementById("correo").value;

  if (!nombre || !apellidos || !correo) {
    alert("⚠️ Completa todos los campos para restaurar.");
    return;
  }

  alert("📩 Se ha enviado un enlace de restauración a tu correo.");
  document.getElementById("form-olvide").style.display = "none";
  document.getElementById("form-restaurar").style.display = "block";
}

function confirmarRestauracion() {
  const nueva = document.getElementById("nueva2").value;
  const confirmar = document.getElementById("confirmar2").value;

  if (!nueva || !confirmar) {
    alert("⚠️ Completa todos los campos.");
    return;
  }
  if (nueva !== confirmar) {
    alert("❌ Las contraseñas no coinciden.");
    return;
  }

  alert("✅ Tu contraseña fue restaurada con éxito.");
  window.location.href = "index.html";
}
