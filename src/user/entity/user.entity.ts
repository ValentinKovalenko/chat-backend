import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30, nullable: true })
  fullName: string;

  @Column({ type: 'varchar', length: 15, nullable: true })
  nickName: string;

  @Column({ type: 'varchar', length: 40, unique: true })
  email: string;

  @Column({ type: 'int', nullable: true })
  age: number;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'enum', enum: ['m', 'f', 'u'], nullable: true })
  gender: string;
}
