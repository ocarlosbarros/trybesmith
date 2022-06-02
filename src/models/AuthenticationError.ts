export default class AuthenticationError extends Error {
  public name;

  public message;

  constructor(message:string) {
    super();
    this.name = 'AuthenticationError';
    this.message = message;
  }
}
