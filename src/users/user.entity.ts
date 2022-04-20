import { hash } from 'bcryptjs';

export class User {
  private _password: string;

  constructor(private readonly _email: string, private readonly _name: string) {}

  public async setPassword(pass: string): Promise<void> {
    this._password = await hash(pass, 10);
  }

  get email(): string {
    return this._email;
  }

  get password(): string {
    return this._password;
  }

  get name(): string {
    return this._name;
  }
}
