import {
  Inject,
  Controller,
  Provide,
  Post,
  Get,
  Del,
  Put,
  Validate,
  Body,
  ALL,
} from '@midwayjs/decorator';
import { Context } from 'egg';
import { UserService } from './service';
import { UserDTO } from './dto';
import { CreateApiDoc } from '@midwayjs/swagger';

@Provide()
@Controller('/api/user')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @(CreateApiDoc().summary('创建用户').description('创建用户的接口').build())
  @Post('/')
  @Validate()
  async create(@Body(ALL) user: UserDTO) {
    await this.userService.userRegister(user);
    return this.ctx.success(11);
  }

  @Get('/')
  async queryUserList() {
    this.ctx.body = 'xs';
  }

  @Get('/:seq')
  async getUser() {}

  @Del('/:seq')
  async deleteUser() {}

  @Put('/:seq')
  async updateUser() {}
}
