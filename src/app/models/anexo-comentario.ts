
import {Comentario} from './comentario';
import {ModelBase} from './model-base';


export class AnexoComentario extends ModelBase {
    nome: string;
    tipo: 'A' | 'F' | 'S';
    extensao?: 'P' | 'J' | 'W';
    caminhoAnexo: string;
    comentario: Comentario;

}
