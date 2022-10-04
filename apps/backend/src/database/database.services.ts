import {Injectable} from '@nestjs/common';
import {Sequelize} from 'sequelize-typescript';

@Injectable()
export class DatabaseService {
  constructor(readonly sequelize: Sequelize) {}

  async closeConnection(): Promise<void> {
    return
  }
}