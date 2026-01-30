import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BooksController {
    constructor(private readonly booksService:
 BooksService) {}
    
// @Get('info')
//     info() {
//         return this.booksService.getInfo();
//     }

// @Get()
// findAll() {
//     return { message: 'Daftar buku (sementara)' };
//     }

// @Get('health')
//   healthCheck() {
//     return this.booksService.healthCheck();
//   }      

@Post()
create(@Body() dto: CreateBookDto) {
  return this.booksService.create(dto);
}

@Get()
findAll() {
  return this.booksService.findAll();
}

@Get(':id')
findOne(@Param('id', ParseIntPipe) id: number) {
  return this.booksService.findOne(id);
}

@Put(':id')
update(@Param('id', ParseIntPipe) id: number, @Body()
dto: UpdateBookDto) {
  return this.booksService.update(id, dto);
}

@Delete(':id')
remove(@Param('id', ParseIntPipe) id: number) {
  return this.booksService.remove(id);
}
}