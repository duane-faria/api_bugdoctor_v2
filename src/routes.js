const Router = require('express').Router;
const controllers = require('./app/controller');
const AuthMiddleware = require('./app/middlewares/auth');
const routes = new Router();

routes.post('/user', controllers.UserController.store);
routes.post('/session', controllers.SessionController.store);
routes.get('/team/validate/code/:code', controllers.TeamController.validateCode);
routes.post('/team', controllers.TeamController.store);
routes.get('/user/validate/email/:email', controllers.UserController.validateEmail);

routes.use(AuthMiddleware);

routes.get('/bugs/:team_id', controllers.BugController.index);
routes.post('/bug', controllers.BugController.store);
routes.get('/users/:team_id', controllers.UserController.index);
routes.get('/team/:id', controllers.TeamController.show);
routes.delete('/bug/:id', controllers.BugController.delete);
routes.get('/projects/:team_id', controllers.ProjectController.index);

module.exports = routes;
