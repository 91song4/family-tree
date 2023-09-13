import { OriginClan } from '../origin-clan/origin-clan.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ schema: 'family_tree', name: 'family_member' })
export class FamilyMember {
  @PrimaryGeneratedColumn({
    type: 'int',
    unsigned: true,
    name: 'member_id',
  })
  readonly memberId: number;

  @Column({
    type: 'int',
    unsigned: true,
    nullable: false,
    name: 'origin_number',
  })
  readonly originNumber: number;

  @Column({
    type: 'int',
    unsigned: true,
    nullable: false,
    name: 'clan_number',
  })
  readonly clanNumber: number;

  @Column({
    type: 'varchar',
    length: 2,
    nullable: false,
    name: 'generation',
  })
  readonly generation: string;

  @Column({
    type: 'varchar',
    length: 20,
    nullable: false,
    name: 'member_name',
  })
  readonly memberName: string;

  @Column({
    type: 'int',
    unsigned: true,
    nullable: true,
    name: 'father',
  })
  readonly father: number;

  @Column({
    type: 'int',
    unsigned: true,
    nullable: true,
    name: 'mother',
  })
  readonly mother: number;

  @Column({
    type: 'int',
    unsigned: true,
    nullable: true,
    name: 'wife',
  })
  readonly wife: number;

  @ManyToOne((type) => OriginClan, (originClan) => originClan.familyMember, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({
    referencedColumnName: 'originClanId',
    name: 'origin_clan_id',
  })
  originClan: OriginClan;
}
