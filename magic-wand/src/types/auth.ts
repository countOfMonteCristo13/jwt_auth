export type Auth = {
  username: string;
  password: string;
  accessToken: string;
};

export const InitialAuthState: Auth = {
  username: '',
  password: '',
  accessToken: '',
};
