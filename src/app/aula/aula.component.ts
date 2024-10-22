import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {CommonModule} from '@angular/common';
import {Comentario} from '../models/comentario';
import {AulaService} from '../services/aula.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {ComentarioService} from '../services/comentario.service';
import {Aula} from '../models/aula';

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
export class AulaComponent implements OnInit {
  aula: Aula = new Aula()

  constructor(private comentarioService: ComentarioService, private activatedRoute: ActivatedRoute, public aulaService: AulaService) {
  }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params['id'];
    if (id) {
      this.getById(id)

    }
  }

  getById(id: number) {
    this.aulaService.clearParams();
    this.aulaService.addParam('expand', 'comentarios');

    this.aulaService.getById(id).subscribe(response => {
      this.aula = response;
    })
  }

  // getAll() {
  //   this.dataSource.getAll().subscribe(response => {
  //     this.dataSource = response;
  //   });
  // }

  enviarMensagem() {
    // if (this.mensagem.trim()) {
    //   console.log('Mensagem enviada:', this.mensagem);
    //   this.mensagensEnviadas.push(this.mensagem);
    //   this.mensagem = '';
    // }
  }
}
