const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

siteController.indget

router.get('/search', siteController.search);
router.get('/', siteController.index);

module.exports = router;
