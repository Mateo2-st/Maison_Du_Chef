// Uso: requireRole(['admin','owner'])
export const requireRole = (rolesAllowed = []) => (req, res, next) => {
    const userRole = req.user?.id_rol; // asumimos que en el token viene id_rol
    if (!userRole) return res.status(403).json({ msg: 'Rol no disponible' });

  // Si rolesAllowed contiene nombres, habría que mapear idRol -> nombre. 
  // Aquí asumimos que token trae también rolNombre en req.user.rolNombre
    const rolNombre = req.user?.rolNombre;
    if (rolesAllowed.length && !rolesAllowed.includes(rolNombre)) {
    return res.status(403).json({ msg: 'Acceso denegado: rol no autorizado' });
    }
    next();
};
