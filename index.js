const PORT = process.env.PORT || 5000;
const { server } = require('./app/server');

try {
  server()
    .listen(PORT)
    .on('listening', () => {
      console.log('Listen on port', PORT);
    });
  // console.log('server on port', 2000)
} catch (error) {
  console.error('no se pudo manejar el error');
}
