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

    @Column({ length: 200, name: "pet_name" })
    petName: string;

    @Column({ length: 3000, name: "pet_info" })
    petInfo: string;

    @Column({ name: "pet_price"})
    petPrice: number;

    @Column({
        type: 'enum',
        enum: PurchaseStatus,
        default: PurchaseStatus.in_stock,
        name: "purchase_status"
    })
    PurchaseStatus: PurchaseStatus;
}
