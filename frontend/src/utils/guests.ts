import { firestore } from "./firebase";

import Guest, { guestConverter } from "../models/Guest";

const COLLECTION = firestore.collection("guests");

export const getGuests = (user: any, updateFunction: any) => {
  const query = COLLECTION.where("user", "==", user.uid);

  const unsubscribe = query.onSnapshot((querySnapshot) => {
    const guests: Guest[] = [];
    querySnapshot.forEach((guest) => {
      guests.push(guestConverter.fromFirestore(guest.id, guest.data()));
    });
    updateFunction(guests);
  });

  return unsubscribe;
};

export const addGuest = async (guest: Guest) => {
  return COLLECTION.doc().set(guestConverter.toFirestore(guest));
};
