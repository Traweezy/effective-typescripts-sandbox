import { Injectable, ProviderScope, ProviderType } from '@tsed/common';
import { getConnection, Connection, Repository, EntitySchema } from 'typeorm';
import { Entity, constructorOf } from '@tsed/core';
import StandUser from './models/stand-user.model';

@Injectable({
  type: ProviderType.SERVICE,
  scope: ProviderScope.SINGLETON,
})
export class DBService {
  connection: Connection;

  constructor() {
    this.connection = getConnection();
  }

  public async getStandUsersRepo(): Promise<Repository<StandUser>> {
    return this.connection.getRepository(StandUser);
  }
}

export default DBService;
