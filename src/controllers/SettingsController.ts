import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { SettingsRepository } from '../repositories/SettingsRepository';

export default {
  async index(request: Request, response: Response) {
    try {
      const settingsRepository = getCustomRepository(SettingsRepository);
      const settings = await settingsRepository.find();
      response.status(200).json(settings);
    } catch (error) {
      response.status(400).json({
        error,
      });
    }
  },

  async create(request: Request, response: Response) {
    try {
      const { username, chat } = request.body;

      const settingsRepository = getCustomRepository(SettingsRepository);

      const settings = settingsRepository.create({
        username,
        chat,
      });

      await settingsRepository.save(settings);

      response.status(201).json({
        response: 'Settings created with success.',
      });
    } catch (error) {
      response.status(400).json({
        error,
      });
    }
  },
};
