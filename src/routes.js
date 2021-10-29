const Router = require('express').Router;
const controllers = require('./app/controller');
const AuthMiddleware = require('./app/middlewares/auth');
const routes = new Router();

routes.post('/user', controllers.UserController.store);
routes.post('/session', controllers.SessionController.store);
routes.get('/team/validate/code/:code', controllers.TeamController.validateCode);
routes.post('/team', controllers.TeamController.store);
routes.use(AuthMiddleware);

// routes.get('/user', controllers.UserController.index);

// routes.put('/projects', controllers.ProjectController.update);
// routes.delete('/projects/:id', controllers.ProjectController.delete);
// routes.post('/technologies', controllers.TechnologiesController.store);
// routes.put('/technologies', controllers.TechnologiesController.update);
// routes.delete('/technologies/:id', controllers.TechnologiesController.delete);


module.exports = routes;
