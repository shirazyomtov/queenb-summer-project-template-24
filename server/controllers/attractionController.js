const Attraction = require('../models/AttractionModel');

// get all attractions
const getAllAttractions = async (req, res) => {
    try {
        const attractions = await Attraction.find();
        res.status(200).json(attractions);
    } catch (err) {
        res.status(400).json({mssg: 'error getting attractions', err})
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

// Return the values of the fields in the attraction database
const getUniqueValues = async (req, res) => {
    try {
        const { field } = req.params;
        const uniqueValues = await Attraction.distinct(field);
        res.status(200).json(uniqueValues);
    } catch (err) {
        res.status(400).json({mssg: 'error getting unique values of Attractions', err})
    }
  };


module.exports = {
    getAllAttractions,
    createAttraction,
    getUniqueValues,
}