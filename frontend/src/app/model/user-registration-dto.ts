export class UserRegistrationDto {

  constructor(private login: string, private password: string,
              private repeatPassword: string) {
  }
}
