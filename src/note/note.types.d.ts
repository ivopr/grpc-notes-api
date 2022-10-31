interface NoteInterface {
  findAll(): Promise<ReturnAll>;
  findOne(props: FindOne): Promise<Note>;
  createOne(props: Note): Promise<Note>;
}

type FindOne = {
  id: number;
};

type Note = {
  id?: number;
  title: string;
  content: string;
};

type ReturnAll = {
  notes: Note[];
};
