const express = require('express');
const { getAllAttractions,
    filterAttractions,
    createAttraction,
    getUniqueValues,
 } = require('../controllers/attractionController')

const router = express.Router()

///////////// Attractions:

router.get('/', getAllAttractions)

router.get('/filter', filterAttractions)

router.post('/create', createAttraction)

router.get('/unique/:field', getUniqueValues)



/**
 * Read and Write Permission Routes
 */
// POST a new duck
// router.post('/', createDuck)

// // DELETE a duck
// router.delete('/:id', deleteDuck)

// // UPDATE a duck
// router.patch('/:id', updateDuck)

module.exports = router