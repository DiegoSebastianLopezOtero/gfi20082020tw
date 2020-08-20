import React, {useState} from 'react';
import Header from './components/Header/Header';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import LoginForm from './components/LoginForm/LoginForm';
import MovieBrowser from './components/MovieBrowser/MovieBrowser';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AlertComponent from './components/AlertComponent/AlertComponent';
function App() {

  const [title, updateTitle] = useState(null);
  const [errorMessage, updateErrorMessage] = useState(null);

  return (
    <Router>
    <div className="App">
        <MuiThemeProvider>
          <Header title={title}/>
        </MuiThemeProvider>
        <div className="container d-flex align-items-center flex-column">
          <Switch>
            <Route path="/" exact={true}>
              <RegistrationForm showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route path="/register">
              <RegistrationForm showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route path="/login">
              <LoginForm showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route path="/MovieBrowser">
              <MuiThemeProvider>
                <MovieBrowser showError={updateErrorMessage}/>
              </MuiThemeProvider>
            </Route>
          </Switch>
          <AlertComponent errorMessage={errorMessage} hideError={updateErrorMessage}/>
        </div>
    </div>
    </Router>
  )
}
export default App;
