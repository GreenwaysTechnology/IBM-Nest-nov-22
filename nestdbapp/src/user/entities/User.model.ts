import { Table, Column,Model } from 'sequelize-typescript'

@Table
export class User extends Model {
    //column mapping
    @Column
    firstName: string

    @Column
    lastName: string

    @Column({ defaultValue: true })
    isActive: boolean

}