export default () => {
  const env = process.env;
  return {
    port: Number(env.API_PORT) || 3000,
    db: {
      username: env.DB_USERNAME,
      password: env.DB_PASSWORD,
      database: env.DB_DATABASE,
      port: env.DB_PORT,
      host: env.DB_HOST
    }
  }
}