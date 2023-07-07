import { UserRole } from "src/components/user-roles/entities/user-role.entity";
import { User } from "src/components/user/entities/user.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'roles' })
export class Role {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'name' })
    name: string;

    @Column({ name: 'created_at', default: () => "CURRENT_TIMESTAMP" })
    createdAt: Date;

    @Column({ name: 'updated_at', nullable: true })
    updatedAt: Date;

    @Column({ name: 'deleted_at', nullable: true })
    deletedAt: Date;

    @OneToMany(() => UserRole, (userRole) => userRole.user)
    users: User[]

}
