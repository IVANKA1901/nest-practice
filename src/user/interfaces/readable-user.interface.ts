export interface IReadableUser {
  readonly userName: string;
  readonly email: string;
  readonly age: number;
  status: string;
  readonly gender: string;
  accessToken?: string;
}
