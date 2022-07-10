import { IsString } from "@nestjs/class-validator";
import { ApiProperty } from "@nestjs/swagger";


export class CreateUserTest {
  @ApiProperty({ description: '이름' })
  @IsString()
  name: string;

  @ApiProperty({ description: '전화번호' })
  @IsString()
  phone: string;
}

export class ResponseCreateUserTest {
  @ApiProperty({ description: '결과' })
  result: string;
}