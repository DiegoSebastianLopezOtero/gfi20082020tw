import React,{useEffect, useReducer  } from 'react';
 import { withRouter } from 'react-router-dom';
import {Col, Row} from 'react-bootstrap';
import Search from '../Search/Search';
import Movie from './Movie';
import { initialState, reducer } from "../../store/reducer";
import axios from "axios";
const OMBD_API_URL ="http://omdbapi.com/?apikey=f12ba140"


function MovieBrowser(props) {

   useEffect(() => {
       let confirm = window.sessionStorage.getItem("confirm");
       if(confirm !== "true"){
         redirectToLogin();
       }
     },[])

   function redirectToLogin() {
   props.history.push('/login');
   }


   const [state, dispatch] = useReducer(reducer, initialState);

     useEffect(() => {
       axios.get(OMBD_API_URL).then(jsonResponse => {
         dispatch({
           type: "SEARCH_MOVIES_SUCCESS",
           payload: jsonResponse.data.Search
         });
       });
     }, []);


   const search = searchValue => {
      dispatch({
        type: "SEARCH_MOVIES_REQUEST"
      });

      axios(`https://www.omdbapi.com/?s=${searchValue}&apikey=f12ba140`).then(
        jsonResponse => {
          if (jsonResponse.data.Response === "True") {
            dispatch({
              type: "SEARCH_MOVIES_SUCCESS",
              payload: jsonResponse.data.Search
            });
          } else {
            dispatch({
              type: "SEARCH_MOVIES_FAILURE",
              error: jsonResponse.data.Error
            });
          }
        }
      );
    };

    const { movies, errorMessage} = state;

    const updatedMovies = () =>{
      if(errorMessage){
          props.showError(errorMessage)
      }else{
        if(movies){
            return (
            movies.map((movie, index) => (
              <Col xs={3} key={index}>
                <Movie key={`${index}-${movie.Title}`} movie={movie}/>
              </Col>
            ))
          )
        }
      }
    }

    return(
      <>
          <Row>
            <Search search={search}/>
          </Row>
          <Row>{updatedMovies()}</Row>
      </>
    )
};
// export default MovieBrowser;
export default withRouter(MovieBrowser);
