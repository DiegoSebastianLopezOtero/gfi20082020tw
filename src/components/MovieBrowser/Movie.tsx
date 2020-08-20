import React,{useState} from "react";
import {Col} from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import ModalMovie from './ModalMovie'

import { makeStyles } from '@material-ui/core/styles';
const DEFAULT_PLACEHOLDER_IMAGE ="";


const Movie = ({ movie }) => {
  const [modalShow, setModalShow] = React.useState(false);
  const poster = movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  const [textButton, setTextButton] = useState(
    window.localStorage.length ? window.localStorage.getItem(movie.imdbID) !== null ? "Remove Favorite" : "Add Favorite" : "Add Favorite"
  );



  const itsFavorite = () => {
    return window.localStorage.length ? window.localStorage.getItem(movie.imdbID) !== null ? true : false : false;
  }


  const favoriteClick = (movie) => {
    if(itsFavorite()){
      window.localStorage.removeItem(movie.imdbID);
      setTextButton(window.localStorage.getItem(movie.imdbID) === null ? "Add Favorite" : "Remove Favorite");
      // setTextButton( window.localStorage.removeItem(movie.imdbID) ? window.localStorage.getItem(movie.imdbID) === null ? "Add Favorite" : "Remove Favorite" : "Add Favorite");
    }else{
      window.localStorage.setItem(movie.imdbID, JSON.stringify(movie))
      setTextButton(window.localStorage.getItem(movie.imdbID) !== null ? "Remove Favorite" : "Add Favorite" );
      // setTextButton( window.localStorage.setItem(movie.imdbID, JSON.stringify(movie)) ? window.localStorage.getItem(movie.imdbID) === null ? "Remove Favorite" : "Add Favorite" : "Remove Favorite");
    }
  }

  const useStyles = makeStyles((theme) => ({
      submit: {
        margin: theme.spacing(3, 3, 3, 4),
      },
  }));

  const classes = useStyles();

  const center = {
    display: "block",
    marginLeft :"auto",
    marginRight: "auto",
  };



  return (
    <Box boxShadow={3}>
        <Col sm={8} className="p-4">
          <img
            width="200"
            alt={`The movie titled: ${movie.Title}`}
            src={poster}
            style={center}
            onClick={() => setModalShow(true)}
          />
          <>
          <ModalMovie
            show={modalShow}
            onHide={() => setModalShow(false)}
            movie={movie}
          />
          </>
          <>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(e) => favoriteClick(movie)}
          >
           {textButton}
          </Button>
          </>
        </Col>
    </Box>
  );
};


export default Movie;
