import { Controller, Get } from '@tsed/common';
import StandUser from '../services/db/models/stand-user.model';
import { DBService } from '../services/db';
@Controller('/stand-users')
export class StandUsers {
  constructor(private readonly dbService: DBService) {}

  @Get()
  getAll(): Promise<Array<StandUser>> {
    return this.dbService.getStandUsersRepo().then(repo => repo.find());
  }
}

export default StandUsers;
