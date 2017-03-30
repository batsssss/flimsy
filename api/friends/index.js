/**
 * Author: Barbara Goss
 * Created: 2017-03-12
 */
let express = require('express');
let router = new express.Router();

let controller = require('./controller');

router.get('/', controller.index);

module.exports = router;