import axios from 'axios';
import jwtDecode from 'jwt-decode';

export default class AuthService {
  private tokenKey = 'jwt_token';

  public setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  public getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  public removeToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  public isAuthenticated(): boolean {
    const token = this.getToken();
    if (token) {
      const decodedToken: any = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      return decodedToken.exp > currentTime;
    }
    return false;
  }

  public async login(email: string, password: string): Promise<boolean> {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/signin', { email, password });
      const { token } = response.data;
      this.setToken(token);
      return true;
    } catch (error) {
      console.error('Login failed:', error);
      return false;
    }
  }

  public logout(): void {
    this.removeToken();
  }
}