import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import StandUser from './stand-user.model';

@Entity('stands')
class Stand extends BaseEntity {
  @PrimaryGeneratedColumn({
    name: 'stand_id',
  })
  standId: number;

  @Column({
    name: 'stand_name',
    type: 'varchar',
    precision: 255,
  })
  standName: string;

  @Column({
    name: 'stand_name',
    type: 'varchar',
    precision: 255,
  })
  standType: string;

  @OneToOne(type => StandUser)
  @JoinColumn()
  standUser: StandUser;
}

export default Stand;
