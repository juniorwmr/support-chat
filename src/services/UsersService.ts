import { getCustomRepository, Repository } from 'typeorm';
import { Users } from '../entities/Users';
import { UsersRepository } from '../repositories/UsersRepository';

interface IUsersCreate {
  email: string;
}

class UsersService {
  private usersRepository: Repository<Users>;

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository);
  }

  async create({ email }: IUsersCreate) {
    const newUser = this.usersRepository.create({ email });

    const userAlreadyExists = await this.usersRepository.findOne({ email });

    if (userAlreadyExists) {
      return userAlreadyExists;
    }

    const user = await this.usersRepository.save(newUser);

    return user;
  }
}

export { UsersService };
