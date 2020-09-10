import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('jojo.stand_users')
class StandUser extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'stand_user_id' })
  standUserId: number;

  @Column({
    name: 'stand_user_name',
    type: 'varchar',
    precision: 255,
  })
  standUserName: string;

  @Column({
    name: 'stand_user_age',
    type: 'integer',
  })
  standUserAge: number;
}

export default StandUser;
