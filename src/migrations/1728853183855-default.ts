import { MigrationInterface, QueryRunner } from "typeorm";

export class default1728853183855 implements MigrationInterface {
    name = 'default1728853183855'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`teams\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome\` varchar(30) NOT NULL, \`serie\` char(1) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`players\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome\` varchar(30) NOT NULL, \`posicao\` char(3) NOT NULL, \`team_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`players\` ADD CONSTRAINT \`FK_ce457a554d63e92f4627d6c5763\` FOREIGN KEY (\`team_id\`) REFERENCES \`teams\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`players\` DROP FOREIGN KEY \`FK_ce457a554d63e92f4627d6c5763\``);
        await queryRunner.query(`DROP TABLE \`players\``);
        await queryRunner.query(`DROP TABLE \`teams\``);
    }

}
