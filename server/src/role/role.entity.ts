import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Check } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
@Check(`(role_id = 1 AND role = 'Admin') OR (role_id = 2 AND role = 'Customer')`)
@Check(`role_id IN (1, 2)`)

export class Role {
    @PrimaryGeneratedColumn()
    role_id: number;

    @Column({ unique: true })
    role: string;

    @OneToMany(() => User, user => user.user_id)
    user_id: User[];
}
