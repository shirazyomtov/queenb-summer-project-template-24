import { useState, useContext } from "react";
import "./AttractionsForm.css";
import { AttractionContext } from "../../context/AttractionContext";
import { createAttraction } from "../../services/utils";

const AttractionForm = () => {
  const { addNewAttraction } = useContext(AttractionContext);
  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [recommendations, setRecommendations] = useState("");
  const [category, setCategory] = useState("Sights");
  const [country, setCountry] = useState("");
  const [continent, setContinent] = useState("Europe");
  const [error, setError] = useState(null);

  const handleReset = () => {
    setTitle("");
    setCity("");
    setImageUrl("");
    setDescription("");
    setRecommendations("");
    setCategory("");
    setCountry("");
    setContinent("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const attraction = {
      title,
      city,
      imageUrl,
      description,
      recommendations,
      category,
      country,
      continent,
    };

    try {
      await createAttraction(attraction);
      addNewAttraction(attraction);
      handleReset();
      setError(null);
    } catch (error) {
      console.error("Error adding attraction:", error);
      setError("Failed to add attraction");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h3>Add a new attraction</h3>
        <label>Title:</label>
        <input
          type="text"
          onChange={(event) => setTitle(event.target.value)}
          value={title}
          placeholder="Enter title"
          required
        />

        <label>Continent:</label>
        <select
          name="continent"
          id="continent"
          onChange={(event) => setContinent(event.target.value)}
          value={continent}
        >
          <option value="Europe">Europe</option>
          <option value="North America">North America</option>
          <option value="Asia">Asia</option>
          <option value="Oceania">Oceania</option>
          <option value="South America">South America</option>
          <option value="Australia">Australia</option>
          <option value="Africa">Africa</option>
        </select>

        <label>Country:</label>
        <input
          type="text"
          onChange={(event) => setCountry(event.target.value)}
          value={country}
          placeholder="Enter country"
          required
        />

        <label>City:</label>
        <input
          type="text"
          onChange={(event) => setCity(event.target.value)}
          value={city}
          placeholder="Enter city"
          required
        />

        <label>Image (enter a link url to the chosen image):</label>
        <input
          type="text"
          onChange={(event) => setImageUrl(event.target.value)}
          value={imageUrl}
          placeholder="Enter URL image"
          required
        />

        <label>Description:</label>
        <textarea
          cols="65"
          rows="10"
          placeholder="enter description"
          onChange={(event) => setDescription(event.target.value)}
          value={description}
          required
        />

        <label>Recommendations (enter a number between 1 to 10):</label>
        <input
          type="number"
          onChange={(event) => setRecommendations(event.target.value)}
          value={recommendations}
          placeholder="Enter your rating, where 10 represents the best attraction and 1 the worst"
          required
        />
        <label htmlFor="category">Category:</label>
        <select
          name="category"
          id="category"
          onChange={(event) => setCategory(event.target.value)}
          value={category}
        >
          <option value="Sights">Sight</option>
          <option value="Restaurants">Restaurant</option>
          <option value="Museums">Museum</option>
          <option value="Events">Event</option>
        </select>

        <button type="button" onClick={handleReset}>
          Reset
        </button>
        <button type="submit">Add Attraction</button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default AttractionForm;
