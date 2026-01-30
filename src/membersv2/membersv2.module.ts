import { Module } from '@nestjs/common';
import { Membersv2Service } from './membersv2.service';
import { Membersv2Controller } from './membersv2.controller';

@Module({
  controllers: [Membersv2Controller],
  providers: [Membersv2Service],
})
export class Membersv2Module {}
