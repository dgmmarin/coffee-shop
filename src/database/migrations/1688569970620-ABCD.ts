import { MigrationInterface, QueryRunner } from "typeorm";

export class ABCD1688569970620 implements MigrationInterface {
    name = 'ABCD1688569970620'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`updated_at\` \`updated_at_\` datetime NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`updated_at_\` \`updated_at\` datetime NULL`);
    }

}
