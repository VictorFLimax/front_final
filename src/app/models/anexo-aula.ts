import {Aula} from './aula';
import {ModelBase} from './model-base';


export class AnexoAula extends ModelBase {
  nome: string;
  tipo: 'A' | 'F' | 'S';
  extensao?: 'P' | 'J' | 'W';
  caminhoAnexo: string;
  aula: Aula;
}
