export class RegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
  password: string;
  confirmPassword: string;
  role: number;
  country: string;
  dateOfBirth: Date;
  profilephoto: string;
  address: Address;
  phone: string;
  groupInstanceId: number;
}

export class Address {
  street: string;
  houseNumber: number;
  city: string;
  postalCode: number;
  id: number;
  createdBy: string;
  createdDate: Date;
  lastModifiedBy: string;
  lastModifiedDate: Date;
}
