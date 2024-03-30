import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    user_id: number;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    dob: Date;

    @Column()
    address: string;

    @Column()
    password: string;

}
