import { Role } from "src/components/role/entities/role.entity";
import { User } from "src/components/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'user_roles'})
export class UserRole {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'created_at',default: () => "CURRENT_TIMESTAMP"})
    createdAt: Date;

    @Column({ name: 'updated_at_', nullable: true})
    updatedAt: Date;

    @Column({ name: 'deleted_at', nullable: true})
    deletedAt: Date;

    @ManyToOne(() => User, (user) => user.roles)
    @JoinColumn({ name: "user_id" })
    user:User

    @ManyToOne(() => Role, (role) => role.users)
    @JoinColumn({ name: "role_id" })
    role: Role
}
