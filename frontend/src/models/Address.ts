export default class Address {
  public country: string;
  public municipality: string;
  public district: string;
  public zipCode: string;
  public street: string;
  public number: string;

  constructor(
    country: string,
    municipality: string,
    district: string,
    zipCode: string,
    street: string,
    number: string
  ) {
    this.country = country;
    this.municipality = municipality;
    this.district = district;
    this.zipCode = zipCode;
    this.street = street;
    this.number = number;
  }

  toString() {
    return `${this.street} ${this.number}, ${this.municipality}${
      this.district ? " (" + this.district + ")" : ""
    }, ${this.zipCode} ${this.country}`;
  }
}

export const addressConverter = {
  toFirestore: (address: Address) => ({
    country: address.country,
    municipality: address.municipality,
    district: address.district,
    zipCode: address.zipCode,
    street: address.street,
    number: address.number,
  }),
  fromFirestore: (data: any) =>
    new Address(
      data.country,
      data.municipality,
      data.district,
      data.zipCode,
      data.street,
      data.number
    ),
};
