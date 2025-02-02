import {auth} from '@/lib/auth';
export const middleware = auth;
export const config = {
  matcher: ['/stats/:path*', '/menu/:path*', '/quiz/:path*'],
};
