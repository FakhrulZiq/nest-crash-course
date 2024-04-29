import { MigrationInterface, QueryRunner } from 'typeorm';

export class NewMigration1714380267417 implements MigrationInterface {
  name = 'NewMigration1714380267417';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" ("id" integer PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "description" varchar NOT NULL, "address" varchar NOT NULL)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
