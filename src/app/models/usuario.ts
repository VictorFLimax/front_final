import {ModelBase} from './model-base';

export enum Perfil {
  INSTRUTOR = 'I',
  PARTICIPANTE = 'P'
}

export class Usuario extends ModelBase {
  username: string;
  password: string;
  perfil: Perfil;
  apelido: string;
  readonly token: string;
}
