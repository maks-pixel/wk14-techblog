const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const newpostRoutes = require('./new-post-routes.js');

router.use('/', homeRoutes);
router.use('/newpost', newpostRoutes);
router.use('/api', apiRoutes);

module.exports = router;

