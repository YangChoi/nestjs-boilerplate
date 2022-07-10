import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({description: '이름'})
  @Column({comment: '이름'})
  name: string;

  @ApiProperty({description: '전화번호'})
  @Column({comment: '전화번호'})
  phone: string;

  @ApiProperty({description: '주소'})
  @Column({comment: '주소'})
  address: string;
}