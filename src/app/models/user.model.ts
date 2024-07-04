export class User {
  id: number;
  userId: string;
  role: string;
  token: string;


  constructor(id: number, userId: string, role: string, token: string) {
    this.id = id;
    this.userId = userId;
    this.role = role;
    this.token = token;
  }
}
