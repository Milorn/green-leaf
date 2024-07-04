
const { Router } = require('express');
const plantsController = require('../controllers/plant.controller');
const validator = require('../middlewares/validator.middleware');
const plantsValidation = require('../validation/plants.validation');
const errorHandler = require('../middlewares/errorHandler');
const objectIdMiddleware = require('../middlewares/objectId.middleware');
const multer = require('multer');
const upload = multer({dest: "public/uploads/"});

const router = Router();

router.get('/plants', errorHandler(plantsController.index));
router.post('/plants', upload.single('image'), validator(plantsValidation.store), errorHandler(plantsController.store));
router.get('/plants/:id', objectIdMiddleware, errorHandler(plantsController.show));
router.put('/plants/:id',  objectIdMiddleware, upload.single('image'), validator(plantsValidation.store), errorHandler(plantsController.update));
router.delete('/plants/:id', objectIdMiddleware, errorHandler(plantsController.delete));

module.exports = router;