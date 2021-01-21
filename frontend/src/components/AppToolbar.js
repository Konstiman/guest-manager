import React from "react";

import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Grid } from "@material-ui/core";

const AppToolbar = ({ authenticated, signOut }) => {
  return (
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
        {authenticated && (
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
  );
};

export default AppToolbar;
