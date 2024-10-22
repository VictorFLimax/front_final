
import {Aula} from './aula';
import {Usuario} from './usuario';
import {ModelBase} from './model-base';


export class Comentario extends ModelBase{

  texto: string;
  tipo: 'P' | 'O';
  aula: Aula
  usuario: Usuario;
}
