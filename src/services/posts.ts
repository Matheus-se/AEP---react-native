import {IAlertPosts} from '../models/IAlertPosts';

export function alertPosts(): Promise<IAlertPosts[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          title: 'Instruções para AEP',
          date: '13/06/2021',
          sector: 'Direção',
          type: 'notice',
          uri: 'https://studeo.unicesumar.edu.br/#!/app/studeo/aluno/ambiente/disciplina/MDL_AC_659/forum//50873/topico/507487/resposta',
        },
        {
          title: 'Datas para AEP',
          date: '13/06/2021',
          sector: 'Direção',
          type: 'alert',
          message: {
            author: 'Pedro Yasui',
            img: '',
            content:
              "Caros senhores responsáveis, informo que a entrega da aep dos alunos é para esta sexta-feira. Esta é uma mensagem de exemplo. então o conteúdo e formalidade desta mensagem não necessariamente se aplica ao servidor de homologação Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          },
        },
        {
          title: 'Instruções para AEP',
          date: '13/06/2021',
          sector: 'Direção',
          type: 'notice',
          uri: 'https://studeo.unicesumar.edu.br/#!/app/studeo/aluno/ambiente/disciplina/MDL_AC_659/forum//50873/topico/507487/resposta',
        },
        {
          title: 'Instruções para AEP',
          date: '13/06/2021',
          sector: 'Direção',
          type: 'notice',
          uri: 'https://studeo.unicesumar.edu.br/#!/app/studeo/aluno/ambiente/disciplina/MDL_AC_659/forum//50873/topico/507487/resposta',
        },
        {
          title: 'Instruções para AEP',
          date: '13/06/2021',
          sector: 'Direção',
          type: 'notice',
          uri: 'https://studeo.unicesumar.edu.br/#!/app/studeo/aluno/ambiente/disciplina/MDL_AC_659/forum//50873/topico/507487/resposta',
        },
      ]);
    }, 2000);
  });
}
