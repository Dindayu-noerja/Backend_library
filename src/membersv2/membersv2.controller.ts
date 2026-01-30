import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Membersv2Service } from './membersv2.service';
import { CreateMembersv2Dto } from './dto/create-membersv2.dto';
import { UpdateMembersv2Dto } from './dto/update-membersv2.dto';

@Controller('membersv2')
export class Membersv2Controller {
  constructor(private readonly membersv2Service: Membersv2Service) {}

  @Post()
  create(@Body() createMembersv2Dto: CreateMembersv2Dto) {
    return this.membersv2Service.create(createMembersv2Dto);
  }

  @Get()
  findAll() {
    return this.membersv2Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.membersv2Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMembersv2Dto: UpdateMembersv2Dto) {
    return this.membersv2Service.update(+id, updateMembersv2Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.membersv2Service.remove(+id);
  }
}
