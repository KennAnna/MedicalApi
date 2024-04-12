import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {RoleEnum} from "../../auth/enums/role.enum";
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    user_id: number;

    @Column()
    name: string;

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

    @Column()
    role: RoleEnum;

}
