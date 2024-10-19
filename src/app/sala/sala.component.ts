import {Component, OnInit} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {Router} from '@angular/router';
import {Sala} from '../models/sala';
import {SalaService} from '../services/sala.service';
import {MatChip, MatChipsModule} from '@angular/material/chips';
import {CommonModule} from '@angular/common';
import {AuthService} from '../services/auth.service';
import {Perfil} from '../models/usuario';

@Component({
  selector: 'app-sala',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatChipsModule,
    CommonModule
  ],
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})
export class SalaComponent implements OnInit {
  displayedColumns: string[] = ['id', 'instituicao', 'disciplina', 'conteudo', 'actions']; // Adicionei 'actions' para o botão
  dataSource: Sala[] = [];
  Perfil = Perfil;

  constructor(private salaService: SalaService, private router: Router, public authService: AuthService) {
  }

  ngOnInit() {
    // Para testes, vamos adicionar uma linha de teste manualmente
    // this.dataSource = [
    //   {
    //     id: 1, sala: 'Sala 101', disciplina: 'Matemática', assunto: 'Álgebra',
    //     created_at: undefined,
    //     modified_at: undefined,
    //     active: false
    //   } // Linha de teste
    // ];
    // Se você quiser carregar dados da API, pode descomentar a linha abaixo
    this.getAll();
  }

  getAll() {
    this.salaService.getAll().subscribe(response => {
      this.dataSource = response;
    });
  }

  goSalaItem() {
    this.router.navigate(['sala/new']).then();
  }

  entrar(id: string) {
    this.router.navigate([`aula/${id}`]).then();
  }
}
