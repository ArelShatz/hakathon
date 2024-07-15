import { Entity, Column, BaseEntity } from "typeorm";

@Entity()
export class Polygon extends BaseEntity {
    @Column({ name: "CITY_NAME" })
    city_name

    @Column({ name: "POLYGON_ID" })
    polygon_id

    @Column({ name: "AREA_NAME" })
    area_name

    @Column({ name: "SHIELD_TIME" })
    shield_time

    @Column({ name: "CHANNEL_ID" })
    channel_id
}