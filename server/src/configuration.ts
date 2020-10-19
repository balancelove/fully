import { Configuration } from '@midwayjs/decorator';
import * as swagger from '@midwayjs/swagger';

@Configuration({
  importConfigs: ['./config/'],
  imports: ['@midwayjs/orm', swagger],
})
export class ContainerConfiguration {}
