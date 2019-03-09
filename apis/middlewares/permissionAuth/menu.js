/* eslint-disable consistent-return */
import permissions from '../../config/permission';
// Admin Permissions
const MenuPermissions = {
  canView(req, res, next) {
    if (!req.decodedToken) {
      return res.status(401).json({ error: 'No token Provided, cannnot have access' });
    }

    const permissionList = req.decodedToken.permission;
    const canView = permissionList.includes(permissions.GLOBAL)
         || permissionList.includes(permissions.READ_MENU);
    if (!canView) {
      return res.status(403).json({ error: 'You cannot do this!' });
    }
    next();
  },
  canCreate(req, res, next) {
    if (!req.decodedToken) {
      return res.status(401).json({ error: 'No token Provided, cannnot have access' });
    }

    const permissionList = req.decodedToken.permission;
    const canView = permissionList.includes(permissions.GLOBAL)
         || permissionList.includes(permissions.WRITE_MENU);
    if (!canView) {
      return res.status(403).json({ error: 'You cannot do this!' });
    }
    next();
  },

};

module.exports = MenuPermissions;
