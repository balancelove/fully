import { Rule, RuleType } from '@midwayjs/decorator';

export class LockInfoDTO {
  @Rule(RuleType.boolean())
  lock: boolean;

  @Rule(RuleType.number())
  count: number;

  @Rule(RuleType.date())
  lockDate: Date;
}

export class UserDTO {
  @Rule(RuleType.string().required())
  userName: string;

  @Rule(RuleType.string().required())
  password: string;

  @Rule(RuleType.string())
  nickName: string;

  @Rule(RuleType.string().max(11))
  mobile: string;

  @Rule(RuleType.string().email())
  email: string;

  @Rule(LockInfoDTO)
  lockInfo: LockInfoDTO;
}
