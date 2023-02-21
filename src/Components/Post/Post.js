import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import "./Post.css";
import { imageUrl, API_KEY } from "../../Constants/Constants";
import axios from "../../Axios";
const Post = (props) => {
  const [movies, setmovies] = useState([]);
  const [urlid, seturlid] = useState("");
  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        console.log(response.data);
        setmovies(response.data.results);
      })
      .catch((err) => {
        alert("Warning");
      });
  }, []);

  const opts = {
    height: "300",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (id) => {
    console.log(id);
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en=us`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          seturlid(response.data.results[0]);
        }
      });
  };

  return (
    <div className="post">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <img
            onClick={() => handleMovie(obj.id)}
            className={props.isSmall ? "card" : "cards"}
            src={`${imageUrl + obj.backdrop_path}`}
            alt="card"
          />
        ))}
      </div>
      {urlid && <YouTube videoId={urlid.key} opts={opts} />}
    </div>
  );
};

export default Post;
