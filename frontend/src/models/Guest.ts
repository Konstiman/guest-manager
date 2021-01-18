import firebase from "firebase";
import Address, { addressConverter } from "./Address";

export default class Guest {
  public id: string;
  public user: string;
  public seqNum: string;
  public firstName: string;
  public lastName: string;
  public purpose: string;
  public document: string;
  public address: Address;
  public arrival: Date;
  public departure: Date;
  public note: string;

  constructor(
    id: string,
    user: string,
    seqNum: string,
    firstName: string,
    lastName: string,
    purpose: string,
    document: string,
    address: Address,
    arrival: Date,
    departure: Date,
    note: string
  ) {
    this.id = id;
    this.user = user;
    this.seqNum = seqNum;
    this.firstName = firstName;
    this.lastName = lastName;
    this.purpose = purpose;
    this.document = document;
    this.address = address;
    this.arrival = arrival;
    this.departure = departure;
    this.note = note;
  }
}

export const guestConverter = {
  toFirestore: (guest: Guest) => ({
    user: guest.user,
    seqNum: guest.seqNum,
    firstName: guest.firstName,
    lastName: guest.lastName,
    purpose: guest.purpose,
    document: guest.document,
    address: addressConverter.toFirestore(guest.address),
    arrival: guest.arrival,
    departure: guest.departure,
    note: guest.note,
  }),
  fromFirestore: (id: string, data: firebase.firestore.DocumentData) =>
    new Guest(
      id,
      data.user,
      data.seqNum,
      data.firstName,
      data.lastName,
      data.purpose,
      data.document,
      addressConverter.fromFirestore(data.address),
      data.arrival,
      data.departure,
      data.note
    ),
};
