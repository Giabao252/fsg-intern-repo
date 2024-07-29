import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Role } from '../role/role.entity';
import { Cart } from '../cart/cart.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    user_id: number;

    @Column({ length: 200, unique: true })
    username: string;

    @Column({ length: 200, default: "SSO User" })
    password: string;

    @Column({ length: 200, unique: true })
    email: string;

    @ManyToOne(() => Role, role => role.user_id)
    role: Role;
}
