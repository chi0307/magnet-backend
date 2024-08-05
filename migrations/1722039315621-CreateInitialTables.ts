import { type MigrationInterface, type QueryRunner } from 'typeorm'

export class CreateInitialTables1675292827048 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "user_info" (
        "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
        "name" varchar(100) NOT NULL,
        "email" varchar(100) NOT NULL,
        "created_at" timestamptz NOT NULL DEFAULT now(),
        "update_at" timestamptz NOT NULL DEFAULT now(),
        PRIMARY KEY ("id")
      );

      CREATE TABLE "ledger_info" (
        "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
        "user_info_id" uuid NOT NULL,
        "name" varchar(100) NOT NULL,
        "is_default" bool DEFAULT false,
        "is_visible_in_general" bool DEFAULT true,
        "created_at" timestamptz NOT NULL DEFAULT now(),
        "updated_at" timestamptz NOT NULL DEFAULT now(),
        PRIMARY KEY ("id")
      );

      CREATE TABLE "purchase_info" (
        "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
        "ledger_info_id" uuid NOT NULL,
        "user_info_id" uuid NOT NULL,
        "description" varchar(255) NOT NULL,
        "amount" decimal(10,2) NOT NULL,
        "purchase_date" timestamptz NOT NULL DEFAULT now(),
        "created_at" timestamptz NOT NULL DEFAULT now(),
        "updated_at" timestamptz NOT NULL DEFAULT now(),
        PRIMARY KEY ("id")
      );

      ALTER TABLE "ledger_info" ADD FOREIGN KEY ("user_info_id") REFERENCES "user_info" ("id");
      ALTER TABLE "purchase_info" ADD FOREIGN KEY ("ledger_info_id") REFERENCES "ledger_info" ("id");
      ALTER TABLE "purchase_info" ADD FOREIGN KEY ("user_info_id") REFERENCES "user_info" ("id");
    `)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE "purchase_info";
      DROP TABLE "ledger_info";
      DROP TABLE "user_info";
    `)
  }
}
