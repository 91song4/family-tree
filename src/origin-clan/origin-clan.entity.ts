import { FamilyMember } from 'src/family-member/family-member.entity';
import { FamilyName } from 'src/family-name/family-name.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ schema: 'family_tree', name: 'origin_clan' })
export class OriginClan {
  @PrimaryGeneratedColumn({
    type: 'int',
    unsigned: true,
    name: 'origin_clan_id',
  })
  readonly originClanId: number;

  @Column({
    type: 'varchar',
    length: 10,
    nullable: false,
    name: 'origin_clan_name',
  })
  readonly originClanName: string;

  @Column({
    type: 'int',
    unsigned: true,
    nullable: false,
    name: 'manage_origin_clan_id',
  })
  readonly manageOriginClanId: string;

  @ManyToOne((type) => FamilyName, (familyName) => familyName.originClan, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({
    referencedColumnName: 'familyNameId',
    name: 'family_name_id',
  })
  familyName: FamilyName;

  @OneToMany((type) => FamilyMember, (familyMember) => familyMember.originClan)
  familyMember: FamilyMember[];
}
