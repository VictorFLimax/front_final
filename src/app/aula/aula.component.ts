import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { MatCardModule } from '@angular/material/card'; // Importar MatCardModule
import { MatFormFieldModule } from '@angular/material/form-field'; // Importar MatFormFieldModule
import { MatInputModule } from '@angular/material/input'; // Importar MatInputModule
import { MatButtonModule } from '@angular/material/button';
import {CommonModule} from '@angular/common'; // Importar MatButtonModule

@Component({
  selector: 'app-aula',
  templateUrl: './aula.component.html',
  standalone: true,
  styleUrls: ['./aula.component.css'],
  imports: [
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
  ]
})
export class AulaComponent {
  disciplina: string = 'Nome da Disciplina';
  conteudo: string = 'Conteúdo do Curso';
  mensagem: string = '';
  mensagensEnviadas: string[] = [];

  enviarMensagem() {
    if (this.mensagem.trim()) {
      console.log('Mensagem enviada:', this.mensagem);
      this.mensagensEnviadas.push(this.mensagem);
      this.mensagem = '';
    }
  }
}
