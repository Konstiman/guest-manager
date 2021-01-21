import React, { FC, useState, Fragment } from "react";

import { Button, Grid, TextField, Typography } from "@material-ui/core";
import Address from "../models/Address";
import Guest from "../models/Guest";

type Props = {
  user: any;
};

const New: FC<Props> = ({ user }) => {
  const [guestForms, setGuestForms] = useState<Guest[]>([emptyGuestBuilder()]);
  const handleGuestFormChange = (guest: Guest, index: number) => {
    const newGuestForms = [...guestForms];
    newGuestForms[index] = guest;
    setGuestForms(newGuestForms);
  };
  const handleAddAnother = () => {
    setGuestForms((prev) => [...prev, emptyGuestBuilder()]);
  };
  const handleSave = () => {
    // TODO
    alert("TODO save");
  };

  // TODO set the grid dimensions properly

  return (
    <>
      {guestForms.map((guestForm, index) => (
        // TODO optimize the index thing
        <Fragment key={index}>
          <Typography variant="h5" style={{ fontWeight: "bold" }}>
            {index === 0 ? "Přidání nového hosta" : "Další host"}
          </Typography>
          <Typography variant="body2" style={{ marginTop: 10 }}>
            Základní údaje
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={3} md={2}>
              <TextField
                label="Pořadové číslo"
                name="seqNum"
                type="text"
                margin="normal"
                variant="filled"
                value={guestForm.seqNum}
                onChange={(event) => {
                  guestForm.seqNum = event.target.value;
                  handleGuestFormChange(guestForm, index);
                }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
              <TextField
                label="Jméno"
                name="firstName"
                type="text"
                margin="normal"
                variant="filled"
                value={guestForm.firstName}
                onChange={(event) => {
                  guestForm.firstName = event.target.value;
                  handleGuestFormChange(guestForm, index);
                }}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
              <TextField
                label="Příjmení"
                name="lastName"
                type="text"
                margin="normal"
                variant="filled"
                value={guestForm.lastName}
                onChange={(event) => {
                  guestForm.lastName = event.target.value;
                  handleGuestFormChange(guestForm, index);
                }}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={3} md={2}>
              <TextField
                label="Číslo OP/pasu"
                name="document"
                type="text"
                margin="normal"
                variant="filled"
                value={guestForm.document}
                onChange={(event) => {
                  guestForm.document = event.target.value;
                  handleGuestFormChange(guestForm, index);
                }}
                fullWidth
                required
              />
            </Grid>
          </Grid>
        </Fragment>
      ))}
      <div>
        <Typography
          variant="body1"
          onClick={handleAddAnother}
          style={{ cursor: "pointer", marginBottom: 20, marginTop: 10 }}
        >
          + přidat dalšího
        </Typography>
        <Button variant="contained" color="primary" onClick={handleSave}>Uložit</Button>
      </div>
    </>
  );
};

export default New;

const emptyGuestBuilder = () => {
  const today = todayBuilder();
  const tomorrow = todayBuilder();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return new Guest(
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    new Address("", "", "", "", "", ""),
    today,
    tomorrow,
    ""
  );
};

const todayBuilder = () => {
  const today = new Date();
  today.setHours(12);

  return today;
};
