import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 30
  })
  username: string;

  @Column()
  email: string;

  @Column()
  password_digest: string;
}
