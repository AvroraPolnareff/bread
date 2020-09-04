import {MigrationInterface, QueryRunner} from "typeorm";
import {TableColumn} from "typeorm/index";

export class BreadUserUpdateFrequency1599227718480 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("bread_user", new TableColumn({
            name: "updateFrequency",
            type: "int",
            default: "120000"
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("bread_user", "updateFrequency")
    }

}
