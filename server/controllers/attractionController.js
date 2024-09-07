const Attraction = require('../models/AttractionModel');
const querystring = require('node:querystring');

// get all attractions
const getAllAttractions = async (req, res) => {
    try {
        const attractions = await Attraction.find();
        res.status(200).json(attractions);
    } catch (err) {
        res.status(400).json({mssg: 'error getting attractions', err})
    }
}

// filter attractions
const filterAttractions = async (req, res) => {
    // try {    
        // const { continents, categories } = req.query; // Extract query parameters from the URL
        // console.log("routes continents: ", continents)
        // console.log("routes categories: ", categories)

        // // const { continents, categories } = req.body;

        // // Build the query object dynamically
        // const filter = {};
        // if (continents) {
        //     // Add conditions to the filter if they exist and are arrays
        //     const continentsArray = Array.isArray(continents) ? continents : continents.array.split(',');
        //     if (continentsArray.length > 0) {
        //     // if (Array.isArray(continents) && continents.length > 0) {
        //         filter.continent = { $in: continents };
        //     }
        // }
        // // if (Array.isArray(countries) && countries.length > 0) {
        // //     filter.country = { $in: countries };
        // // }
        // if (categories) {

        //     const categoriesArray = Array.isArray(categories) ? categories : categories.split(',');
        //     if (categoriesArray.length > 0) {
        //     // if (Array.isArray(categories) && categories.length > 0) {
        //         filter.category = { $in: categories };
        //     }
        // }

        // // Find attractions with the dynamic filter
        // const attractions = await Attraction.find(filter);
        // res.status(200).json(attractions);

        // const { categories = [] } = req.query;

        // console.log(Array.isArray(categories)); // true

        // const filteredAttraction = Attraction.filter((att) =>
        //     categories.includes(att.category)
        // );
        // res.json(filteredAttraction);

    try {
        // Extract query parameters
        const { continent, category } = req.query;

        // `continent` and `category` will be arrays if multiple values are sent
        const filter = {};

        if (continent) {
            filter.continent = { $in: continent }; // `continent` is already an array
        }
        if (category) {
            filter.category = { $in: category }; // `category` is already an array
        }

        const attractions = await Attraction.find(filter);
        res.status(200).json(attractions);
    } catch (err) {
        res.status(400).json({ message: 'Error getting attractions', error: err });
    }
}


// create a new attraction
const createAttraction = async (req, res) => {
    const {title,city,imageUrl,description,recommendations,category,country,continent} = req.body;

    try {
        const attraction = await Attraction.create({title,city,imageUrl,description,recommendations,category,country,continent});
        res.status(200).json({attraction});
    } catch (err) {
        res.status(400).json({mssg: 'error creating attraction', err})
    }
}


const getUniqueValues = async (req, res) => {
    try {
        const { field } = req.params;
        const uniqueValues = await Attraction.distinct(field);
        res.status(200).json(uniqueValues);
    } catch (err) {
        res.status(400).json({mssg: 'error getting unique values of Attractions', err})
    }
  };
  


// // get all ducks
// const getAllDucks = async (req, res) => {
//     try {
//         const ducks = await RubberDuck.find();
//         res.status(200).json({ducks});
//     } catch (err) {
//         res.status(400).json({mssg: 'error getting ducks', err})
//     }
// }


// // get a random duck
// const getRandomDuck = async (req, res) => {
//     try {
//         const count = await RubberDuck.countDocuments();
//         const random = Math.floor(Math.random() * count);
//         const duck = await RubberDuck.findOne().skip(random);
//         res.status(200).json(duck);
//     } catch (error) {
//         res.status(400).json({ mssg: 'Error fetching random duck', err: error });
//     }
// };

// // get a single duck
// const getSingleDuck = async (req, res) => {
//     const {id} = req.params;

//     try {
//         const duck = await RubberDuck.findById(id);
//         res.status(200).json({duck});
//     } catch (err) {
//         res.status(400).json({mssg: 'error getting duck', err})
//     }
// }

// // create a new duck
// const createDuck = async (req, res) => {
//     const {name, color, imageUrl} = req.body;

//     try {
//         const duck = await RubberDuck.create({name, color, imageUrl});
//         res.status(200).json({duck});
//     } catch (err) {
//         res.status(400).json({mssg: 'error creating duck', err})
//     }
// }

// // delete a duck
// const deleteDuck = async (req, res) => {
//     const {id} = req.params;

//     try {
//         const duck = await RubberDuck.findByIdAndDelete(id);
//         res.status(200).json({duck});
//     } catch (err) {
//         res.status(400).json({mssg: 'error deleting duck', err})
//     }
// }

// // update a duck
// const updateDuck = async (req, res) => {
//     const {id} = req.params;
//     const {name, color, squeaks} = req.body;

//     try {
//         const duck = await RubberDuck.findByIdAndUpdate(id, {name, color, squeaks}, {new: true});
//         res.status(200).json({duck});
//     } catch (err) {
//         res.status(400).json({mssg: 'error updating duck', err})
//     }
// }



module.exports = {
    // getAllDucks,
    // getSingleDuck,
    // createDuck,
    // deleteDuck,
    // updateDuck,
    // getRandomDuck,
    getAllAttractions,
    filterAttractions,
    createAttraction,
    getUniqueValues,
}