import {AllowNull, AutoIncrement, Column, DataType, PrimaryKey, Table} from 'sequelize-typescript';

@Table
export class Execution {
    @PrimaryKey
    @AutoIncrement
    @AllowNull(false)
    @Column(DataType.BIGINT)
    id!: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    profileId!: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    profileVersion!: string;

    @AllowNull(false)
    @Column(DataType.DATE)
    executionTime!: Date;

    @AllowNull(false)
    @Column(DataType.STRING)
    status!: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    result!: string;

    @AllowNull(true)
    @Column(DataType.BOOLEAN)
    success!: boolean;

    @AllowNull(true)
    @Column(DataType.STRING)
    error!: string;
}