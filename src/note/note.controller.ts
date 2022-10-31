import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { PrismaService } from 'src/prisma.service';

@Controller()
export class NoteController implements NoteInterface {
  constructor(private prisma: PrismaService) {}

  @GrpcMethod('NoteController', 'FindAll')
  async findAll(): Promise<ReturnAll> {
    const notes = await this.prisma.notes.findMany();

    return {
      notes,
    };
  }

  @GrpcMethod('NoteController', 'FindOne')
  async findOne(props: FindOne): Promise<Note> {
    const note = await this.prisma.notes.findFirst({
      where: {
        id: props.id,
      },
    });

    return note;
  }

  @GrpcMethod('NoteController', 'CreateOne')
  async createOne(props: Note): Promise<Note> {
    const note = await this.prisma.notes.create({
      data: {
        content: props.content,
        title: props.title,
      },
    });

    return note;
  }
}
