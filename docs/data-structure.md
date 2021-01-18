# Data structure

## User's data

The authentication uses e-mail authentication only, so the only user's data initially available is:

- user's uid
- user's e-mail address

The user can also change the following data in the Settings section:

- e-mail address
- displayed name

```
user: Object {
  uid: String
  email: String
  displayName: String
}

```

## Guesthouse data

The data originate from the required data described in the [System requirements](./requirements.md).

The user can read and modify only their own data.

```
guests: Collection [
  id: String : {
    user: <fk to user.uid>
    seqNum: Number
    firstName: String
    lastName: String
    purpose: String
    document: String
    address: Map {
      country: String
      place: String
      district: String
      street: String
      number: String
    }
    arrival: Timestamp
    departure: Timestamp
    note: String
  }
]
```
