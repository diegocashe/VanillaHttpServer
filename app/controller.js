const fs = require('fs/promises');

const getHtml = async (html, format = 'utf-8') => {
  try {
    const htmldata = await fs.readFile(html, format); // app\form.html
    return htmldata;
  } catch (error) {
    console.log(error);
    return 0;
  }
};

const indexController = new Map();

indexController
  .set('GET', async (req, res) => {
    const html = await getHtml('./app/form.html');
    res.write(html);
    res.end();
  })
  .set('POST', (req, res) => {
    const { headers } = req;
    const name = headers.body.split(/[^a-z]/gi);
    res.write(`<h1>Hola tu eres ${name[1]}</h1>`);
    res.end();
  });

module.exports = { indexController };
