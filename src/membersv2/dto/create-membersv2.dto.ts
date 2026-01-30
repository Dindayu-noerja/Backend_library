import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMembersv2Dto {
    @IsString()
    @IsNotEmpty()
    name: string;
    
    @IsString()
    @IsNotEmpty()
    className: string;
}