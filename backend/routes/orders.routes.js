
const { Router } = require('express');
const ordersController = require('../controllers/order.controller');
const errorHandler = require('../middlewares/errorHandler');
const objectIdMiddleware = require('../middlewares/objectId.middleware');

const router = Router();

router.get('/orders', errorHandler(ordersController.index));
router.post('/orders', errorHandler(ordersController.store));
router.get('/orders/:id', objectIdMiddleware, errorHandler(ordersController.show));
router.put('/orders/:id',  objectIdMiddleware,  errorHandler(ordersController.update));
router.delete('/orders/:id', objectIdMiddleware, errorHandler(ordersController.delete));

module.exports = router;