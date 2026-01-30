import { Injectable, NotFoundException } from '@nestjs/common';
import { Member } from './dto/member.type';
import { CreateMembersv2Dto } from './dto/create-membersv2.dto';
import { UpdateMembersv2Dto } from './dto/update-membersv2.dto';

@Injectable()
export class Membersv2Service {

    private membersv2: Member[] = [];
    private nextId = 1;
    create(dto: CreateMembersv2Dto): Member {
        const member: Member = { id: this.nextId++, ...dto };
        this.membersv2.push(member);
        return member;
    }

    findAll(): Member[] {
        return this.membersv2;
    }

    findOne(id: number): Member {
        const member = this.membersv2.find(b => b.id === id);
        if (!member) throw new NotFoundException('Mmber not found');
        return member;
    }

    update(id: number, dto: UpdateMembersv2Dto): Member {
        const member = this.findOne(id);
        const updated = { ...member, ...dto };
        this.membersv2 = this.membersv2.map(b => (b.id === id ?
            updated : b));
        return updated;
    }

    remove(id: number) {
        this.findOne(id);
        this.membersv2 = this.membersv2.filter(b => b.id !== id);
        return { message: `member with id ${id} deleted` };
    }

}