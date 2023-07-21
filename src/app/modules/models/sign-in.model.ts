export interface signUserData {
  firstName:string | null | undefined;
  lastName:string | null | undefined;
  email:string | null | undefined;
  phone :string | null | undefined;
  password:string | null | undefined;
  repassword?:string;
  rules?: boolean;
}
