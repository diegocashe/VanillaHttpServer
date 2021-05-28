const notFound = (req, res) => res.write('Error 404 no se encontro la ruta');

const Router = (handler, url, method) => {
  if (url === '/favicon.ico') {
    return notFound;
  }
  try {
    const controller = handler.get(url);
    const controllerByMethod = controller.get(method);
    if (!controllerByMethod) return notFound;

    return controllerByMethod;
  } catch (error) {
    return notFound;
  }
};

module.exports = {
  Router,
};
