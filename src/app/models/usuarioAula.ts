
import {Aula} from './aula';
import {Usuario} from './usuario';
import {ModelBase} from './model-base';


export class UsuarioAula extends ModelBase {
    usuario: Usuario;
    aula: Aula;
}
