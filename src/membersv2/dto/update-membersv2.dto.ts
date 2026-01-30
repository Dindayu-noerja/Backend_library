import { PartialType } from '@nestjs/mapped-types';
import { CreateMembersv2Dto } from './create-membersv2.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateMembersv2Dto extends PartialType(CreateMembersv2Dto) {
    @IsString()
    @IsOptional()
    name?: string;
    
    @IsString()
    @IsOptional()
    className?: string;
}