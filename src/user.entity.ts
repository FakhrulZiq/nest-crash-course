import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class user {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  address: string;
}
