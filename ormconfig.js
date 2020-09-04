const path = require("path");

module.exports = {
    type: "postgres",
    url: process.env.DATABASE_URL,
    synchronize: true,
    "entities": [
        path.join(__dirname, "/src/db/entity/**/*{.ts,.js}")
    ],
    migrations: [
        path.join(__dirname, "/src/db/migrations/**/*{.ts,.js}")
    ],
    cli: {migrationsDir: path.join(__dirname, "/db/migrations")}
}
