import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { NoteController } from './note.controller';

@Module({
  controllers: [NoteController],
  providers: [PrismaService],
})
export class NoteModule {}
