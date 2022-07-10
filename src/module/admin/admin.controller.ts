import { Body, Controller, Post } from "@nestjs/common"
import { ApiOperation, ApiTags } from "@nestjs/swagger"
import { CreateUserTest, ResponseCreateUserTest } from "../common/dto/common.dto";

@Controller('admin')
export class AdminController {
  constructor(private readonly service: AdminService){}

  @ApiTags('테스트')
  @Post('/test')
  @ApiOperation({
    summary: '어드민 - 테스트',
    description: '어드민 모듈에 테스트를 한다.',
  })
  public async testInAdmin(@Body() payload: CreateUserTest): Promise<ResponseCreateUserTest> {
    return await this.service.createAdminTest(payload);
  }
}