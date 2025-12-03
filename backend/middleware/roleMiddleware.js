export const requireRole = (admin, vendedor) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: "No autenticado"});
    }
    const rolUsuario = req.user.id_rol;

    if (!rolesPermitidos.includes(rolUsuario)) {
      return res.status(403).json({ message: "No autorizado"});
    }

    next();
  };
};