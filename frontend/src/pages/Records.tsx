import React, { useState, useEffect, FC } from "react";
import Address from "../models/Address";
import Guest from "../models/Guest";

import { getGuests, addGuest } from "../utils/guests";

type Props = {
  user: any,
};

const Records : FC<Props> = ({ user }) => {
  const [records, setRecords] = useState<Guest[]>([]);
  useEffect(() => {
    if (!user) {
      return;
    }

    const unsubscribe = getGuests(user, setRecords);

    return () => {
      unsubscribe();
    };
  }, [user]);

  const handleClick = () => {
    addGuest(
      new Guest(
        "",
        user.uid,
        "1",
        "Jan",
        "Konstant",
        "rekreace",
        "200400615",
        new Address("CZ", "Brno", "Líšeň", "628 00", "Šimáčkova", "285/113"),
        new Date(),
        new Date(),
        "nic"
      )
    )
      .then(() => console.log("success"))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h1>Records test</h1>
      {records.map((r) => (
        <p key={r.id}>{r.firstName} {r.lastName}</p>
      ))}
      <h2 onClick={handleClick}>Click</h2>
    </div>
  );
};

export default Records;
