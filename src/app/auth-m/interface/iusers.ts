export interface Iusers {
  AccessToken: string;
  users: {
    username: string;
    email: string;
    nome: string;
    cognome: string;
    password: string;
    role: string;
  };
}
