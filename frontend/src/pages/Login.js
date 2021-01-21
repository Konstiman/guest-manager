import React from "react";
import { useForm } from "react-hook-form";

import { Link as RouterLink } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DialogContentText from "@material-ui/core/DialogContentText";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

const Login = ({ signIn, error, setError }) => {
  const { register, handleSubmit } = useForm();

  const onSignIn = handleSubmit(({ email, password }) => {
    setError("");
    signIn(email, password);
  });

  return (
    <div className="Login" style={{ marginTop: "64px" }}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item md={3} sm={6} xs={12}>
          <Card>
            <form>
              <CardContent>
                <Typography variant="h5" style={{ textAlign: "center" }}>
                  Přihlášení
                </Typography>
                <TextField
                  label="E-mailová adresa"
                  name="email"
                  type="email"
                  autoComplete="email"
                  margin="normal"
                  variant="outlined"
                  inputRef={register({ required: true })}
                  fullWidth
                />
                <TextField
                  label="Heslo"
                  name="password"
                  type="password"
                  margin="normal"
                  variant="outlined"
                  inputRef={register({ required: true })}
                  fullWidth
                />
                <DialogContentText style={{ color: "red" }}>
                  {error}
                </DialogContentText>
              </CardContent>
              <CardActions>
                <Button variant="contained" color="primary" onClick={onSignIn}>
                  Přihlásit se
                </Button>
                <Link component={RouterLink} to="/register" variant="button">
                  Registrace
                </Link>
              </CardActions>
            </form>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
