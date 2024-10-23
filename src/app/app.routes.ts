import {Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {CadastroComponent} from './cadastro/cadastro.component';
import {MainComponent} from './main/main.component';
import {ComentarioComponent} from './aula/comentario/comentario.component';
import {AulaComponent} from './aula/aula.component';
import {AulaItemComponent} from './aula/aula-item/aula-item.component';

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'cadastro', component: CadastroComponent},
  {
    path: '', component: MainComponent, children: [
      {path: 'aula', component: AulaComponent},
      {path: 'aula/:action', component: AulaItemComponent},
      {path: 'comentario/:id', component: ComentarioComponent},
    ]
  },
];
