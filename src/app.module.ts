import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { MembersModule } from './members/members.module';
import { Membersv2Module } from './membersv2/membersv2.module';

@Module({
  imports: [BooksModule, MembersModule, Membersv2Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
