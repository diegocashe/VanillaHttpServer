const http = require('http');
const { handler } = require('./handlers');
const { Router } = require('./routes');

/**
 * @param {Request} request
 * @param {Response} response
 */
const onRequest = async (request, response) => {
  const { method, url, headers } = request;
  const controller = Router(handler, url, method);
  try {
    let body = [];
    request.on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString();
      headers.body = body;
      request.headers = headers;
      controller(request, response);
    });
  } catch (error) {
    response.write(`Server >> ${error}`);
    response.end();
  }
};

const server = () => {
  const serverInstance = http.createServer(onRequest);
  return serverInstance;
};

module.exports = {
  server,
};
