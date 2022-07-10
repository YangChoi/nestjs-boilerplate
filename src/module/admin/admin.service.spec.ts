import { Test, TestingModule } from "@nestjs/testing";
import Connection from "mysql2/typings/mysql/lib/Connection";
import { ConfigService } from "../config";
import { AdminService } from "./admin.service"

describe('AdminService', () => {
  let service: AdminService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AdminService,
        ConfigService,
      ]
    }).compile();

    service = module.get<AdminService>(AdminService);
  })
  
})