import React, { useState } from "react";
import {TextField} from 'material-ui';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  }

  const resetInputField = () => {
    setSearchValue("")
  }

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  }

  const useStyles = makeStyles((theme) => ({
      submit: {
        margin: theme.spacing(3, 0, 2, 4),
      },
  }));

  const classes = useStyles();
  return (
      <form className="searchBar" noValidate autoComplete="off">
      <TextField
        id="search"
        label="Search your movie"
        variant="outlined"
        type="search"

        value={searchValue}
        onChange={handleSearchInputChanges}
       />

       <Button
         type="submit"
         color="primary"
         variant="contained"
         className={classes.submit}
         onClick={callSearchFunction}
       >
         Search
       </Button>

      </form>
    );
}

export default Search;
