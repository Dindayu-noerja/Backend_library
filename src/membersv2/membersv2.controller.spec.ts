import { Test, TestingModule } from '@nestjs/testing';
import { Membersv2Controller } from './membersv2.controller';
import { Membersv2Service } from './membersv2.service';

describe('Membersv2Controller', () => {
  let controller: Membersv2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Membersv2Controller],
      providers: [Membersv2Service],
    }).compile();

    controller = module.get<Membersv2Controller>(Membersv2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
