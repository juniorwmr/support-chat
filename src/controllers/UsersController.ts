import { Request, Response } from 'express';
import { UsersService } from '../services/UsersService';

export default {
  async create(request: Request, response: Response): Promise<Response> {
    try {
      const { email } = request.body;

      const usersService = new UsersService();

      const user = await usersService.create({ email });

      return response.status(200).json(user);
    } catch (error) {
      return response.status(400).json(error.message);
    }
  },
};
