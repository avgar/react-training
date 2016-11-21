import {Router} from 'express';
import wixRenderer from 'wix-renderer';
import wixRunMode from 'wix-run-mode';
import wixExpressRenderingModel from 'wix-express-rendering-model';

module.exports = ({config, basename}) => {
  const app = new Router();

  app.get('/sites', (req, res) => {
    setTimeout(() => {
      res.json([
        {id: 1, siteName: 'Site 1'},
        {id: 2, siteName: 'Site 2'}
      ]);
    }, 500);
  });

  app.get('/', (req, res) => {
    const templatePath = './src/index.ejs';
    const data = {
      title: 'Wix Full Stack Project Boilerplate',
      basename
    };

    wixExpressRenderingModel.generate(req, config)
      .then(renderModel => wixRenderer.render(templatePath, renderModel, data, wixRunMode.isProduction()))
      .then(html => res.send(html));
  });

  return app;
};
