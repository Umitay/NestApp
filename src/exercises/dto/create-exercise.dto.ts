export class CreateExerciseDto {
  tenseId: string;
  level: string;
  title: string;
  description: string;

  questions: { q: string; words: string[]; options: string[]; a: string }[];
}
