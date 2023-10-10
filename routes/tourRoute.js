const router = require('express').Router()
const tourController = require('../controllers/tour')

router.get('/', tourController.getAll)
router.post('/', tourController.create)
router.delete('/:id', tourController.delete)

module.exports = router