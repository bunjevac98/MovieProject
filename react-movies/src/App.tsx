import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import IndividualMovie from "./movies/IndividualMovie";
import { landingPageDTO, movieDTO } from "./movies/movies.model.del";
import MoviesList from "./movies/MoviesList";
function App() {
  const [movies, setMovies] = useState<landingPageDTO>({});

  useEffect(() => {
    const timerId = setTimeout(() => {
      setMovies({
        inTheaters: [
          {
            id: 1,
            title: "Spiderman Far from home",
            poster:
              "https://upload.wikimedia.org/wikipedia/en/f/f9/Spider-Man_Homecoming_poster.jpg",
          },
          {
            id: 2,
            title: "Spiderman  home",
            poster:
              "https://lumiere-a.akamaihd.net/v1/images/p_luca_21670_3c13c611.jpeg?region=0%2C0%2C540%2C810",
          },
          {
            id: 3,
            title: "Far from home",
            poster:
              "https://upload.wikimedia.org/wikipedia/en/6/66/Wednesday_Netflix_series_poster.png",
          },
        ],
        upcomingReleases: [
          {
            id: 4,
            title: "John Wick",
            poster:
              "https://upload.wikimedia.org/wikipedia/en/4/44/John_Wick_%28franchise_logo%29.png",
          },
          {
            id: 5,
            title: "Drive to Survive",
            poster:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Formula_1_Drive_to_Survive.jpg/375px-Formula_1_Drive_to_Survive.jpg",
          },
        ],
      });
    }, 1000);
    return () => clearTimeout(timerId);
  });

  return (
    <div className="container">
      <h3>In Theatres</h3>
      <MoviesList movies={movies.inTheaters} />
      <h3>Upcoming Movies</h3>
      <MoviesList movies={movies.upcomingReleases} />
    </div>
  )
}

export default App;
