import React from "react";
import { useForm } from "react-hook-form";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DialogContentText from "@material-ui/core/DialogContentText";
import Grid from "@material-ui/core/Grid";

const Login = ({ signIn, signUp, error }) => {
  const { register, handleSubmit } = useForm();

  const onSignIn = handleSubmit(({ email, password }) => {
    signIn(email, password);
  });

  const onSignUp = handleSubmit(({ email, password }) => {
    signUp(email, password);
  });

  return (
    <div className="Login" style={{marginTop:'64px'}}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item md={3} sm={6} xs={12}>
          <Card>
            <form>
              <CardContent>
                <Typography variant="h5" style={{textAlign: "center"}}>Přihlášení</Typography>
                <TextField
                  label="E-mail"
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
                <Button variant="text" color="primary" onClick={onSignIn}>
                  Potvrdit
                </Button>
                <Button variant="text" color="primary" onClick={onSignUp}>
                  Vytvořit účet
                </Button>
              </CardActions>
            </form>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
