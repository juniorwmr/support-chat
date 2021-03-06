import { Request, Response } from 'express';
import { MessagesService } from '../services/MessagesService';

export default {
  async create(request: Request, response: Response): Promise<Response> {
    try {
      const { admin_id, text, user_id } = request.body;

      const messagesService = new MessagesService();

      const message = await messagesService.create({ admin_id, text, user_id });

      return response.status(200).json(message);
    } catch (error) {
      return response.status(400).json(error.message);
    }
  },

  async showByUser(request: Request, response: Response): Promise<Response> {
    try {
      const { user_id } = request.params;

      const messagesService = new MessagesService();

      const messages = await messagesService.listByUser({ user_id });

      return response.status(200).json(messages);
    } catch (error) {
      return response.status(400).json(error.message);
    }
  },
};
