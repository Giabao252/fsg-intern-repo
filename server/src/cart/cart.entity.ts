import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { User } from '../user/user.entity';
import { Pet } from '../pet/pet.entity';

export enum CartStatus {
    pending = 'pending',
    approved = 'approved'
}

@Entity()
export class Cart {
    @PrimaryGeneratedColumn()
    cart_id: number;

    @ManyToOne(() => User, user => user.user_id)
    user_id: User;

    @Column('int')
    item_count: number;

    @OneToMany(() => Pet, pets => pets.pet_id)
    pet_id: Pet[];

    @Column({
        type: 'enum',
        enum: CartStatus,
        default: CartStatus.pending
    })
    status: CartStatus;
}