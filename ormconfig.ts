import { ConnectionOptions } from 'typeorm';

export default {
  type: 'sqlite',
  database: './src/database/database.sqlite',
  entities: ['./src/entities/**.ts'],
  migrations: ['./src/database/migrations/**.ts'],
  cli: {
    migrationsDir: './src/database/migrations/',
  },
} as ConnectionOptions;
