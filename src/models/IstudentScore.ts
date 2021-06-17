export interface IStudenScore {
  subject: string;
  teacherName: string;
  scores: IScores[];
}

interface IScores {
  period: string;
  score: number;
}
