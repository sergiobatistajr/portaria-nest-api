export const jwtConstants = {
  secret:
    'DO NOT USE THIS VALUE. INSTEAD, CREATE A COMPLEX SECRET AND KEEP IT SAFE OUTSIDE OF THE SOURCE CODE.',
  oneMinuteInMs: 1000 * 60,
  oneDayInMs: 1000 * 60 * 60 * 24,
  sevenDaysInMs: 1000 * 60 * 60 * 24 * 7,
  accessToken: 'access_token',
  refreshToken: 'refresh_token',
} as const;

export const clientConstants = {
  employee: 'employee',
  delivery: 'delivery',
  guest: 'guest',
} as const;

export const userConstants = {
  admin: 'admin',
  user: 'user',
  report: 'report',
} as const;
