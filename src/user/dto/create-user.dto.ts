export class CreateUserDto {
  public userName: string;
  public email: string;
  public age: number;
  public status: boolean;
  public gender: string;
  private password: string;
}
