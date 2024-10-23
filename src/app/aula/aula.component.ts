import {Component, OnInit} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {Router} from '@angular/router';
import {Aula} from '../models/aula';
import {AulaService} from '../services/aula.service';
import {MatChip, MatChipsModule} from '@angular/material/chips';
import {CommonModule} from '@angular/common';
import {AuthService} from '../services/auth.service';
import {Perfil} from '../models/usuario';

@Component({
  selector: 'app-aula',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatChipsModule,
    CommonModule
  ],
  templateUrl: './aula.component.html',
  styleUrls: ['./aula.component.css']
})
export class AulaComponent implements OnInit {
  displayedColumns: string[] = ['id', 'instituicao', 'disciplina', 'conteudo', 'actions'];
  dataSource: Aula[] = [];
  Perfil = Perfil;

  constructor(private aulaService: AulaService, private router: Router, public authService: AuthService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.aulaService.getAll().subscribe(response => {
      this.dataSource = response;
    });
  }

  goSalaItem() {
    this.router.navigate(['aula/new']).then();
  }

  entrar(id: string) {
    this.router.navigate([`comentario/${id}`]).then();
  }
}
