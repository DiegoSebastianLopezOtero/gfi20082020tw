import React, {useState} from 'react';
import { withRouter } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
function LoginForm(props) {


    const [state , setState] = useState({
        email : "",
        password : "",
        successMessage: null
    })
    const handleChange = (e) => {
        const {id , value} = e.target
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    const handleSubmitClick = (e) => {
        e.preventDefault();
        //todo validar credenciales
        if(window.sessionStorage.getItem("email") === state.email){
          if(window.sessionStorage.getItem("password") === state.password){
            setState(prevState => ({
                ...prevState,
                'successMessage' : 'Login successful. Redirecting to home page..'
            }))
            window.sessionStorage.setItem("confirm", "true");
            redirectToHome();
          }else{
            props.showError("Username and password do not match");
          }

        }else{
          props.showError("Username does not exists");
        }
    }
    const redirectToHome = () => {
        props.updateTitle('Home')
        props.history.push('/MovieBrowser');
    }
    const redirectToRegister = () => {
        props.history.push('/register');
        props.updateTitle('Register');
    }

    const useStyles = makeStyles((theme) => ({
        paper: {
          marginTop: theme.spacing(8),
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
        avatar: {
          margin: theme.spacing(1),
          backgroundColor: theme.palette.secondary.main,
        },
        form: {
          width: '100%', // Fix IE 11 issue.
          marginTop: theme.spacing(1),
        },
        submit: {
          margin: theme.spacing(3, 0, 2),
        },
    }));

    const classes = useStyles();

    function Copyright() {
      return (
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href="https://gfi.world/es-es/">
            Prueba para GFI
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      );
    }

    return(

<>
  <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <form className={classes.form} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          value={state.email}
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={state.password}
          onChange={handleChange}
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={handleSubmitClick}
        >
          Sign In
        </Button>
        <Grid container>

          <Grid item>
            <Link href="#" variant="body2" onClick={() => redirectToRegister()}>
              {"Don't have an account? Register"}
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
    <Box mt={8}>
      <Copyright />
    </Box>
  </Container>
  <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
      {state.successMessage}
  </div>
</>


    )
}

export default withRouter(LoginForm);
