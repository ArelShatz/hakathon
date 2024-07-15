import { Entity, Column, BaseEntity } from "typeorm";

@Entity()
export class Polygon extends BaseEntity {
    @Column({ name: "CITY_NAME" })
    cityName: string

    @Column({ name: "POLYGON_ID" })
    polygonId: number

    @Column({ name: "AREA_NAME" })
    areaName: string

    @Column({ name: "SHIELD_TIME" })
    shieldTime: string

    @Column({ name: "CHANNEL_ID" })
    channelId: number
}