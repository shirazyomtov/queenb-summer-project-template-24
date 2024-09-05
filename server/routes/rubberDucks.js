const express = require('express');
const { //createDuck,
    // getAllDucks,
    // getSingleDuck,
    // deleteDuck,
    // updateDuck,
    // getRandomDuck,
    // getLastFiveAttractions,
    getAllAttractions,
 } = require('../controllers/rubberDuckController')

const router = express.Router()

/**
 * Read Only Permission Routes
 */
// GET all ducks
// router.get('/', getAllDucks)

// // GET a random duck
// router.get('/random', getRandomDuck);

// // GET a single duck
// router.get('/:id', getSingleDuck)

///////////// Attractions:
// GET all Attractions
router.get('/', getAllAttractions)

// // GET a last five Attractions
// router.get('/', getLastFiveAttractions)

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