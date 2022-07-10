import { Injectable } from "@nestjs/common";
import { CreateUserTest, ResponseCreateUserTest } from "../common/dto/common.dto";

@Injectable()
export class AdminService {


  /**
   * 테스트를 합니다.
   *
   * @param payload
   * @returns
   */
  public async createAdminTest(payload: CreateUserTest): Promise<ResponseCreateUserTest> {
    return {result: 'success'};
  }
}