/* eslint-disable consistent-return */
import permissions from '../../config/permission';

// Admin Permissions
const MealsPermissions = {
  canView(req, res, next) {
    if (!req.decodedToken) {
      return res.status(401).json({ error: 'No token Provided, cannnot have access' });
    }

    const permissionList = req.decodedToken.permission;
    const canView = permissionList.includes(permissions.GLOBAL)
        || permissionList.includes(permissions.READ_MEAL);
    if (!canView) {
      return res.status(403).json({ error: 'Only caterers can view meals' });
    }
    next();
  },
  canCreate(req, res, next) {
    if (!req.decodedToken) {
      return res.status(401).json({ error: 'You cannot do this!' });
    }
    const permissionList = req.decodedToken.permission;
    const canView = permissionList.includes(permissions.GLOBAL)
        || permissionList.includes(permissions.WRITE_MEAL);
    if (!canView) {
      return res.status(403).json({ error: 'You cannot do this!' });
    }
    next();
  },

};

module.exports = MealsPermissions;
