module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'jwtSecret'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'tokenSalt'),
  },
});
