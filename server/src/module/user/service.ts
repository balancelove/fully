import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';
import { User } from '../../entity/user';
import { UserDTO } from './dto';

@Provide()
export class UserService {
  @InjectEntityModel(User)
  userModel: Repository<User>;

  async userRegister(user: UserDTO) {
    await this.userModel.save(user);
  }

  async queryUsers() {}

  async getUserBySeq(seq: number) {}
}
