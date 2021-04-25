import { Router } from 'express';
import settingsController from './controllers/SettingsController';
import usersController from './controllers/UsersController';
import messagesController from './controllers/MessagesController';

const routes = Router();

routes.post('/users', usersController.create);

routes.get('/settings', settingsController.index);
routes.post('/settings', settingsController.create);
routes.get('/settings/:username', settingsController.findByUsername);
routes.put('/settings/:username', settingsController.update);

// messages
routes.get('/messages/:user_id', messagesController.showByUser);
routes.post('/messages', messagesController.create);

export default routes;
