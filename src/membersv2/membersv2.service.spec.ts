import { Test, TestingModule } from '@nestjs/testing';
import { Membersv2Service } from './membersv2.service';

describe('Membersv2Service', () => {
  let service: Membersv2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Membersv2Service],
    }).compile();

    service = module.get<Membersv2Service>(Membersv2Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
