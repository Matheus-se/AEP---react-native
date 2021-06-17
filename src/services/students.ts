import { IStudenScore } from './../models/IstudentScore';
import {IStudents} from './../models/Istudents';

interface Response {
  students: IStudents[];
}

const scoresDatabase = {
  0: [
    {
      subject: 'Matemática',
      teacherName: 'Daniela Ferreira',
      scores: [
        {
          period: '1B',
          score: 7.0,
        },
        {
          period: '2B',
          score: 8.5,
        },
        {
          period: '3B',
          score: 9.0,
        },
        {
          period: '4B',
          score: 7.5,
        },
      ],
    },
    {
      subject: 'Portugês',
      teacherName: 'Carlos Drummond',
      scores: [
        {
          period: '1B',
          score: 5.5,
        },
        {
          period: '2B',
          score: 6.5,
        },
        {
          period: '3B',
          score: 8.0,
        },
        {
          period: '4B',
          score: 6.0,
        },
      ],
    },
    {
      subject: 'Ciências',
      teacherName: 'Albert Hawking',
      scores: [
        {
          period: '1B',
          score: 7.0,
        },
        {
          period: '2B',
          score: 9.5,
        },
        {
          period: '3B',
          score: 7.5,
        },
        {
          period: '4B',
          score: 7.0,
        },
      ],
    },
    {
      subject: 'Artes',
      teacherName: 'Rafael Donnatelo',
      scores: [
        {
          period: '1B',
          score: 6.0,
        },
        {
          period: '2B',
          score: 6.5,
        },
        {
          period: '3B',
          score: 6.5,
        },
        {
          period: '4B',
          score: 7.0,
        },
      ],
    },
    {
      subject: 'Educação Física',
      teacherName: 'Ginchin Funakoshi',
      scores: [
        {
          period: '1B',
          score: 8.0,
        },
        {
          period: '2B',
          score: 8.5,
        },
        {
          period: '3B',
          score: 9.0,
        },
        {
          period: '4B',
          score: 7.5,
        },
      ],
    },
    {
      subject: 'História',
      teacherName: 'Pedro Bonaparte',
      scores: [
        {
          period: '1B',
          score: 7.5,
        },
        {
          period: '2B',
          score: 8.0,
        },
        {
          period: '3B',
          score: 6.0,
        },
        {
          period: '4B',
          score: 7.5,
        },
      ],
    },
    {
      subject: 'Geografia',
      teacherName: 'Marcos Antônio',
      scores: [
        {
          period: '1B',
          score: 5.0,
        },
        {
          period: '2B',
          score: 4.5,
        },
        {
          period: '3B',
          score: 6.0,
        },
        {
          period: '4B',
          score: 7.5,
        },
      ],
    },
    {
      subject: 'Inglês',
      teacherName: 'Donald Obama',
      scores: [
        {
          period: '1B',
          score: 7.0,
        },
        {
          period: '2B',
          score: 7.5,
        },
        {
          period: '3B',
          score: 9.0,
        },
        {
          period: '4B',
          score: 7.5,
        },
      ],
    },
  ],
  1: [
    {
      subject: 'Matemática',
      teacherName: 'Daniela Ferreira',
      scores: [
        {
          period: '1S',
          score: 7.0,
        },
        {
          period: '2S',
          score: 8.5,
        },
      ],
    },
    {
      subject: 'Portugês',
      teacherName: 'Carlos Drummond',
      scores: [
        {
          period: '1S',
          score: 5.5,
        },
        {
          period: '2S',
          score: 6.5,
        },
      ],
    },
    {
      subject: 'Ciências',
      teacherName: 'Albert Hawking',
      scores: [
        {
          period: '1S',
          score: 7.0,
        },
        {
          period: '2S',
          score: 9.5,
        },
      ],
    },
    {
      subject: 'Artes',
      teacherName: 'Rafael Donnatelo',
      scores: [
        {
          period: '1S',
          score: 6.0,
        },
        {
          period: '2S',
          score: 6.5,
        },
      ],
    },
    {
      subject: 'Educação Física',
      teacherName: 'Ginchin Funakoshi',
      scores: [
        {
          period: '1S',
          score: 8.0,
        },
        {
          period: '2S',
          score: 8.5,
        },
      ],
    },
    {
      subject: 'História',
      teacherName: 'Pedro Bonaparte',
      scores: [
        {
          period: '1S',
          score: 7.5,
        },
        {
          period: '2S',
          score: 8.0,
        },
      ],
    },
    {
      subject: 'Geografia',
      teacherName: 'Marcos Antônio',
      scores: [
        {
          period: '1S',
          score: 5.0,
        },
        {
          period: '2S',
          score: 4.5,
        },
      ],
    },
    {
      subject: 'Inglês',
      teacherName: 'Donald Obama',
      scores: [
        {
          period: '1S',
          score: 7.0,
        },
        {
          period: '2S',
          score: 7.5,
        },
      ],
    },
  ]
}

export function getStudentScores(id): Promise<IStudenScore> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        scores: scoresDatabase[id]
      } as IStudenScore);
    }, 2000);
  });
}

export function searchResponsibleStudents(): Promise<Response> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        students: [
          {
            id: 0,
            name: 'Matheus Henrique',
            image: '',
            period: '7A - manhã',
          },
          {
            id: 1,
            name: 'Lucas Andrew',
            image: '',
            period: '7A - manhã',
          },
        ],
      });
    }, 2000);
  });
}
