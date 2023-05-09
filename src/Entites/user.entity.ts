import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn('rowid')
  id: number;
  @Column({ name: 'name', nullable: false })
  name: string;
  @Column({ name: 'email' })
  email: string;
  @Column({ name: 'phone' })
  phone: string;
  @Column({ name: 'cpf', nullable: false })
  cpf: string;
  @Column({ name: 'password', nullable: false })
  password: string;
}
