import { OriginClan } from 'src/origin-clan/origin-clan.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ schema: 'family_tree', name: 'family_name' })
export class FamilyName {
  @PrimaryGeneratedColumn({
    type: 'int',
    unsigned: true,
    name: 'family_name_id',
  })
  readonly familyNameId: number;

  @Column({
    type: 'varchar',
    length: 10,
    nullable: false,
    name: 'family_name',
  })
  readonly familyName: string;

  @Column({
    type: 'varchar',
    length: 10,
    nullable: false,
    name: 'classical_chinese',
  })
  readonly classicalChinese: string;

  @OneToMany((type) => OriginClan, (originclan) => originclan.familyName)
  originClan: OriginClan[];
}
