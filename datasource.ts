import { DataSource } from "typeorm";

export const myDataSource = new DataSource({
    type: "postgres",
    host: "172.30.233.109",
    port: 3306,
    username: "Postgres",
    password: "postgres",
    database: "hakaton",
    entities: ["*.entity.js"],
    logging: true,
    synchronize: true,
})