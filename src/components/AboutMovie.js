import React, { useEffect, useState } from "react";
import axios from "axios";

const AboutMovie = ({ movieTitle }) => {
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    // Replace this with the actual API call to fetch movie details
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `YOUR_API_ENDPOINT?title=${movieTitle}`
        );
        setMovieDetails(response.data);
      } catch (error) {
        console.error("Failed to fetch movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [movieTitle]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{movieDetails.title}</h2>
      <p>Cast: {movieDetails.cast.join(", ")}</p>
      <p>Collections: {movieDetails.collections}</p>
    </div>
  );
};

export default AboutMovie;
