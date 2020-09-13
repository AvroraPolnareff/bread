import {MigrationInterface, QueryRunner} from "typeorm";
import {TableColumn} from "typeorm/index";

export class GuildChannelColumnsMarketUrl1599300554025 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("market_url", new TableColumn({
            name: "channelId",
            type: "varchar",
            isNullable: true
        }))
        await queryRunner.addColumn("market_url", new TableColumn({
            name: "guildId",
            type: "varchar",
            isNullable: true
        }))

        await queryRunner.query(`UPDATE market_url SET "guildId" = ''`)
        await queryRunner.query(`UPDATE market_url SET "channelId" = ''`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("market_url", "channelId")
        await queryRunner.dropColumn("market_url", "guildId")
    }

}
