import React from "react";
import "./App.css";

import Login from "./pages/Login";
import New from "./pages/New";
import Records from "./pages/Records";
import Export from "./pages/Export";
import NotFound from "./pages/NotFound";

import { withAuth } from "./utils/firebase";

import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Grid } from "@material-ui/core";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import lightBlue from "@material-ui/core/colors/lightBlue";
import grey from "@material-ui/core/colors/grey";

const toolbarColor = lightBlue[800];
const fontColor = grey[50];

export const mainTheme = createMuiTheme({
  palette: {
    primary: {
      main: toolbarColor,
    },
    secondary: {
      main: fontColor,
    },
  },
});

function App(props) {
  const {
    user,
    createUserWithEmailAndPassword: signUp,
    signInWithEmailAndPassword: signIn,
    signOut,
    error,
    // TODO ???
    //setError
  } = props;

  const loginProps = { signUp, signIn, error };
  const homeProps = { user };

  return (
    <div className="App">
      <ThemeProvider theme={mainTheme}>
        <BrowserRouter>
          <AppBar
            color="primary"
            position="static"
            variant="outlined"
            style={{ height: "64px" }}
          >
            <Toolbar>
              <Grid justify="space-between" container>
                <Grid item>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <Typography color="secondary" variant="h5">
                      Správce hostů
                    </Typography>
                  </Link>
                </Grid>
              </Grid>
              {user && (
                <>
                  <Grid item>
                    <Link to="/" style={{ textDecoration: "none" }}>
                      <Typography color="secondary" variant="button">
                        Nový host
                      </Typography>
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link to="/records" style={{ textDecoration: "none" }}>
                      <Typography color="secondary" variant="button">
                        Evidence
                      </Typography>
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link to="/export" style={{ textDecoration: "none" }}>
                      <Typography color="secondary" variant="button">
                        Tisk
                      </Typography>
                    </Link>
                  </Grid>
                  <Grid item>
                    <Button color="secondary" onClick={signOut}>
                      <Typography color="secondary" variant="button">
                        Odhlásit se
                      </Typography>
                    </Button>
                  </Grid>
                </>
              )}
            </Toolbar>
          </AppBar>
          <div>
            <Switch>
              {!user && <Route render={() => <Login {...loginProps} />} />}
              <Route exact path="/" render={() => <New {...homeProps} />} />
              <Route
                exact
                path="/records/"
                render={() => <Records {...homeProps} />}
              />
              <Route
                exact
                path="/export/"
                render={() => <Export {...homeProps} />}
              />
              <Route component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default withAuth(App);
