import React from "react";
import "./App.css";

import Login from "./pages/Login";
import Register from "./pages/Register";
import New from "./pages/New";
import Records from "./pages/Records";
import Export from "./pages/Export";
import NotFound from "./pages/NotFound";

import AppToolbar from "./components/AppToolbar";

import { withAuth } from "./utils/firebase";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import lightBlue from "@material-ui/core/colors/lightBlue";
import grey from "@material-ui/core/colors/grey";

import { Container } from "@material-ui/core";

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
    setError,
  } = props;

  const loginProps = { signUp, signIn, error, setError };
  const homeProps = { user };

  return (
    <div className="App">
      <ThemeProvider theme={mainTheme}>
        <BrowserRouter>
          <AppToolbar authenticated={!!user} signOut={signOut} />
          <Container maxWidth="lg" style={{marginTop: 20}}>
            <Switch>
              <Route exact path="/register">
                {!!user ? <Redirect to="/" /> : <Register {...loginProps} />}
              </Route>
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
          </Container>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default withAuth(App);
