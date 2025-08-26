export interface TokenResponse {
  access_token: string;
  expires_at: string;
}

export interface AuthState {
  loggedIn: boolean;
  token: TokenResponse | null;
}
