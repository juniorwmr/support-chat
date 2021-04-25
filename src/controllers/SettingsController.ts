import { Request, Response } from 'express';
import { SettingsService } from '../services/SettingsService';

export default {
  async index(request: Request, response: Response): Promise<Response> {
    try {
      const settingsService = new SettingsService();
      const settings = await settingsService.index();

      return response.status(200).json(settings);
    } catch (error) {
      return response.status(400).json({
        message: error.message,
      });
    }
  },

  async create(request: Request, response: Response): Promise<Response> {
    try {
      const { username, chat } = request.body;

      const settingsService = new SettingsService();

      const settings = await settingsService.create({ username, chat });

      return response.status(200).json(settings);
    } catch (error) {
      return response.status(400).json(error.message);
    }
  },

  async findByUsername(
    request: Request,
    response: Response
  ): Promise<Response> {
    try {
      const { username } = request.params;

      const settingsService = new SettingsService();

      const settings = await settingsService.findByUsername(username);

      return response.status(200).json(settings);
    } catch (error) {
      return response.status(400).json({
        message: error.message,
      });
    }
  },

  async update(request: Request, response: Response): Promise<Response> {
    try {
      const { username } = request.params;
      const { chat } = request.body;

      const settingsService = new SettingsService();

      await settingsService.update({ username, chat });

      return response.status(200).json(chat);
    } catch (error) {
      return response.status(400).json({
        message: error.message,
      });
    }
  },
};
