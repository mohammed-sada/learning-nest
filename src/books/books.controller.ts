import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateBookDto, UpdateBookDto, ListAllEntities } from './dto';

@Controller('books')
export class BooksController {
  @Post()
  create(@Body() createCatDto: CreateBookDto) {
    console.log(createCatDto);
    return 'This action adds a new book';
  }

  @Get()
  findAll(@Query() query: ListAllEntities) {
    return `This action returns all books (limit: ${query.limit} items)`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} book`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    console.log(updateBookDto);
    return `This action updates a #${id} book`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} book`;
  }
}
