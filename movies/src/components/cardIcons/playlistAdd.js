import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

const PlaylistAdd = ({ movie }) => {
  const context = useContext(MoviesContext);

  return (
    <IconButton aria-label="add to favorites" >
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default PlaylistAdd;