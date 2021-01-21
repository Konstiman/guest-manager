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

const Register = ({ signUp, error, setError }) => {
  const { register, handleSubmit } = useForm();

  const onSignUp = handleSubmit(({ email, password, passwordAgain }) => {
    if (password !== passwordAgain) {
      setError("Zadaná hesla se neshodují. Zkuste to prosím znovu.");
      return;
    }

    setError("");
    signUp(email, password);
  });

  return (
    <div style={{ marginTop: "64px" }}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item md={3} sm={6} xs={12}>
          <Card>
            <form>
              <CardContent>
                <Typography variant="h5" style={{ textAlign: "center" }}>
                  První přihlášení
                </Typography>
                <TextField
                  label="Zadejte svoji e-mailovou adresu"
                  name="email"
                  type="email"
                  autoComplete="email"
                  margin="normal"
                  variant="outlined"
                  inputRef={register({ required: true })}
                  fullWidth
                />
                <TextField
                  label="Zadejte heslo"
                  name="password"
                  type="password"
                  margin="normal"
                  variant="outlined"
                  inputRef={register({ required: true })}
                  fullWidth
                />
                <TextField
                  label="Zadejte heslo znovu"
                  name="passwordAgain"
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
                <Button variant="contained" color="primary" onClick={onSignUp}>
                  Vytvořit účet
                </Button>
              </CardActions>
            </form>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Register;
