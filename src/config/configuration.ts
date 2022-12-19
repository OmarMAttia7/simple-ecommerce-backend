export default () => {
  return {
    port: Number(process.env.API_PORT) || 3000
  }
}