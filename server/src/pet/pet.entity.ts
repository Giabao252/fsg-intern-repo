import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

export enum PurchaseStatus {
    in_stock = 'available',
    pending = 'pending',
    out_of_stock = 'purchased'
}

@Entity()
export class Pet {
    @PrimaryGeneratedColumn()
    pet_id: number;

    @Column({ length: 200 })
    pet_name: string;

    @Column({ default: '', length: 1000 })
    pet_info: string;

    @Column('int')
    pet_price: number;

    @Column({
        type: 'enum',
        enum: PurchaseStatus,
        default: PurchaseStatus.in_stock
    })
    purchase_status: PurchaseStatus;
}
