export class User {
  constructor(
    public readonly id: string,
    public name: string,
    public cpf: string,
    public password: string,
    public email?: string,
  ) {}
}
