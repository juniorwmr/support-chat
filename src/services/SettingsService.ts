import { getCustomRepository, Repository } from 'typeorm';
import { Settings } from '../entities/Settings';
import { SettingsRepository } from '../repositories/SettingsRepository';

interface ISettingsCreate {
  chat: boolean;
  username: string;
}

export class SettingsService {
  private settingsRepository: Repository<Settings>;

  constructor() {
    this.settingsRepository = getCustomRepository(SettingsRepository);
  }

  async index() {
    const settings = this.settingsRepository.find();

    return settings;
  }

  async create({ chat, username }: ISettingsCreate) {
    const newSettings = this.settingsRepository.create({ username, chat });

    const userAlreadyExists = await this.settingsRepository.findOne({
      username,
    });

    if (userAlreadyExists) {
      return userAlreadyExists;
    }

    const settings = await this.settingsRepository.save(newSettings);

    return settings;
  }

  async findByUsername(username: string) {
    const settings = await this.settingsRepository.findOne({
      username,
    });

    return settings;
  }

  async update({ chat, username }: ISettingsCreate) {
    const settings = await this.settingsRepository.update(
      {
        username,
      },
      { chat }
    );

    return settings;
  }
}
