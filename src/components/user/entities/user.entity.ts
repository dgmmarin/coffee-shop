import { Role } from "src/components/role/entities/role.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"users"})
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'first_name' })
    firstName: string;

    @Column({ name: 'last_name' })
    lastName: string;

    @Column({ default: true, name: 'is_active' })
    isActive: boolean;

    @Column({ name: 'email', unique: true, nullable: false})
    email: string;

    @Column({ name: 'password' })
    password: string;

    @Column({ name: 'phone_number' })
    phoneNumber: string;

    @Column({name: 'created_at',default: () => "CURRENT_TIMESTAMP"})
    createdAt: Date;

    @Column({ name: 'updated_at', nullable: true})
    updatedAt: Date;

    @Column({ name: 'deleted_at', nullable: true})
    deletedAt: Date;

    @ManyToMany(() => Role, role => role.users)
    roles: Role[];
}
