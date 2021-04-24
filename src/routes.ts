import { Request, Response, Router } from 'express';
import settingsController from './controllers/SettingsController';

const routes = Router();

routes.get('/settings', settingsController.index);
routes.post('/settings', settingsController.create);

export default routes;
