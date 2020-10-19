import { EntityModel } from '@midwayjs/orm';
import { Column, ObjectIdColumn, ObjectID, PrimaryColumn } from 'typeorm';

class LockInfo {
  @Column({
    default: false,
  })
  lock: boolean;

  @Column({
    default: 0,
  })
  count: number;

  @Column()
  lockDate: Date;
}

@EntityModel()
export class User {
  @ObjectIdColumn()
  _id: ObjectID;

  @PrimaryColumn({
    default: () => 'seq.nextval',
  })
  seq: number;

  @Column()
  userName: string;

  @Column()
  password: string;

  @Column()
  nickName: string;

  @Column()
  mobile: string;

  @Column()
  email: string;

  @Column(type => LockInfo)
  lockInfo: LockInfo;
}
