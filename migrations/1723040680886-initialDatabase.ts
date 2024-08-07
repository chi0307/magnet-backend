import { type MigrationInterface, type QueryRunner } from 'typeorm'

export class InitialDatabase1723040680886 implements MigrationInterface {
  name = 'InitialDatabase1723040680886'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user_info" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, "email" character varying(100) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_273a06d6cdc2085ee1ce7638b24" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "ledger_info" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, "currency" character varying(3) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "userInfoId" uuid, CONSTRAINT "PK_9d7a9094c9a9ed741c4712baea4" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "category_info" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, "icon" character varying(100) NOT NULL, "sort_index" integer NOT NULL DEFAULT '0', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "ledgerInfoId" uuid, CONSTRAINT "PK_6e132b5eff0f4fcfb3581b3832e" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "purchase_info" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100), "amount" numeric(10,2) NOT NULL, "purchase_date" TIMESTAMP WITH TIME ZONE NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "ledgerInfoId" uuid, "categoryInfoId" uuid, CONSTRAINT "PK_e0d53731120b4b959cda12b8602" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `ALTER TABLE "ledger_info" ADD CONSTRAINT "FK_cd9976fe8bef4e05bc51e12a6ee" FOREIGN KEY ("userInfoId") REFERENCES "user_info"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await queryRunner.query(
      `ALTER TABLE "category_info" ADD CONSTRAINT "FK_1f98fba568e2db06f7c3b128646" FOREIGN KEY ("ledgerInfoId") REFERENCES "ledger_info"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await queryRunner.query(
      `ALTER TABLE "purchase_info" ADD CONSTRAINT "FK_74bfefef0046daef67366a4d600" FOREIGN KEY ("ledgerInfoId") REFERENCES "ledger_info"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await queryRunner.query(
      `ALTER TABLE "purchase_info" ADD CONSTRAINT "FK_a9ecbed90ead39b4d477db3ebcb" FOREIGN KEY ("categoryInfoId") REFERENCES "category_info"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "purchase_info" DROP CONSTRAINT "FK_a9ecbed90ead39b4d477db3ebcb"`,
    )
    await queryRunner.query(
      `ALTER TABLE "purchase_info" DROP CONSTRAINT "FK_74bfefef0046daef67366a4d600"`,
    )
    await queryRunner.query(
      `ALTER TABLE "category_info" DROP CONSTRAINT "FK_1f98fba568e2db06f7c3b128646"`,
    )
    await queryRunner.query(
      `ALTER TABLE "ledger_info" DROP CONSTRAINT "FK_cd9976fe8bef4e05bc51e12a6ee"`,
    )
    await queryRunner.query(`DROP TABLE "purchase_info"`)
    await queryRunner.query(`DROP TABLE "category_info"`)
    await queryRunner.query(`DROP TABLE "ledger_info"`)
    await queryRunner.query(`DROP TABLE "user_info"`)
  }
}
