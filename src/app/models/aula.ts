import {ModelBase} from './model-base';
import {Comentario} from './comentario';


export class Aula extends ModelBase {
  instituicao: string
  disciplina: string
  conteudo: string
  comentarios: Comentario[] = [];
}

