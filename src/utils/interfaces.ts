export interface SignUp {
  email: string;
  password: string;
  gender: string;
  birthYear: string;
  firstName: string;
  lastName: string;
}

export interface ChangePassword {
  email: string;
  phoneNumber?: string;
}
