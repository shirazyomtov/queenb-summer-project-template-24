import { useLocation } from "react-router-dom";
import styles from "./AttractionOverviewPage.module.css";
import Grid from "@mui/material/Grid2";
import Rating from '@mui/material/Rating';

const AttractionOverviewPage = () => {
  const location = useLocation();
  const { attraction } = location.state || {};
  const {
    title,
    city,
    imageUrl,
    description,
    recommendations,
    country,
    category,
  } = attraction;

  if (!attraction) {
    return <h1>No attraction data available</h1>;
  }

  return (
    <Grid container>
      <Grid size={5}>
        <img src={imageUrl} alt={title} className={styles.img} />
      </Grid>

      <Grid size={7}>
        <div className={styles.titleAndRating}>
          {/* Left side - Category */}
          <h3 className={styles.titleCategory}>
            Category: {category}
          </h3>

          {/* Right side - Rating and recommendations */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Rating
              name="read-only"
              value={parseInt(recommendations[0].split('/')[0], 10)} // Parsing the rating value
              readOnly
              max={10}
              className={styles.rating}
            />
            <p> {recommendations}</p>
          </div>
        </div>

        <div className={styles.titleContainer}>
          <h2>{title}</h2>
          <h3>{city}, {country}</h3>

          <p className={styles.description}>
            {description}
          </p>
        </div>
      </Grid>
    </Grid>
  );
};

export default AttractionOverviewPage;
