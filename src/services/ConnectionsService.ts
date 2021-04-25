import { getCustomRepository, Repository } from 'typeorm';
import { Connections } from '../entities/Connections';
import { ConnectionsRepository } from '../repositories/ConnectionsRepository';

interface IConnectionsCreate {
  id?: string;
  socket_id: string;
  user_id: string;
  admin_id?: string;
}

class ConnectionsService {
  private connectionsRepository: Repository<Connections>;

  constructor() {
    this.connectionsRepository = getCustomRepository(ConnectionsRepository);
  }

  async create({ id, socket_id, user_id, admin_id }: IConnectionsCreate) {
    const newConnection = this.connectionsRepository.create({
      id,
      socket_id,
      user_id,
      admin_id,
    });

    await this.connectionsRepository.save(newConnection);

    return newConnection;
  }

  async findByUserId(user_id: string) {
    const connection = await this.connectionsRepository.findOne({ user_id });

    return connection;
  }

  async findAllWithoutAdmin() {
    const connections = await this.connectionsRepository.find({
      where: {
        admin_id: null,
      },
      relations: ['user'],
    });

    return connections;
  }

  async findBySocketID(socket_id: string) {
    const connections = await this.connectionsRepository.findOne({ socket_id });

    return connections;
  }

  async updateAdminID(user_id: string, admin_id: string) {
    const connection = await this.connectionsRepository.update(
      {
        user_id,
      },
      { admin_id }
    );

    return connection;
  }
}

export { ConnectionsService };
