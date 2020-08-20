import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
function RegistrationForm(props) {

        const [state, setState] = useState({
          email: "",
          password: "",
          confirmPassword: "",
          successMessage:null,
        })

        const handleChange = (e => {
          const {id, value} = e.target;
          setState(prevState => ({
              ...prevState,
              [id] : value
          }))
        })

        const redirectToLogin = () => {
          props.updateTitle('Login')
            props.history.push('/login');
        }

        const handleSubmitClick = (e) => {
          e.preventDefault();
          if(state.password === state.confirmPassword){
            window.sessionStorage.setItem("email", state.email);
            window.sessionStorage.setItem("password", state.password);
            window.sessionStorage.setItem("confirm", "true");
            redirectToLogin();
          }else{
            props.showError('passwords do not match, please, retry');
          }
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
            Register
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
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="exampleInputPassword1"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              autoComplete="current-password"
              value={state.confirmPassword}
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmitClick}
            >
              Register
            </Button>
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2" onClick={() => redirectToLogin()}>
                  {"Do you have an account? Sign Up"}

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

export default withRouter(RegistrationForm);
