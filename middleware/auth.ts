import type { Middleware } from '@nuxt/types';
import AuthService from '~/services/auth';

const authMiddleware: Middleware = ({ redirect }) => {
  const authService = new AuthService();

  if (!authService.isAuthenticated()) {
    return redirect('/login');
  }
};

export default authMiddleware;
