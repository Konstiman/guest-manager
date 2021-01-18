export default class Address {
  public country: string;
  public place: string;
  public district: string;
  public street: string;
  public number: string;

  constructor(
    country: string,
    place: string,
    district: string,
    street: string,
    number: string
  ) {
    this.country = country;
    this.place = place;
    this.district = district;
    this.street = street;
    this.number = number;
  }
}

export const addressConverter = {
  toFirestore: (address: Address) => ({
    country: address.country,
    place: address.place,
    district: address.district,
    street: address.street,
    number: address.number,
  }),
  fromFirestore: (data: any) =>
    new Address(
      data.country,
      data.place,
      data.district,
      data.street,
      data.number
    ),
};
