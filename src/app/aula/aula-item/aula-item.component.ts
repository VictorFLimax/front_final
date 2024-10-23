import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AulaService } from '../../services/aula.service';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { NgIf } from '@angular/common';
import {Aula} from '../../models/aula';

@Component({
  selector: 'app-comentario-item',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatSelectModule,
    MatCardModule,
    NgIf,
  ],
  templateUrl: './aula-item.component.html',
  styleUrls: ['./aula-item.component.css']
})
export class AulaItemComponent implements OnInit {
  formGroup: FormGroup;
  aula: Aula = new Aula();

  constructor(private router: Router,
              private aulaService: AulaService,
              private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createFormGroup();
  }

  createFormGroup() {
    this.formGroup = this.formBuilder.group({
      instituicao: ['', [Validators.required]], // Corrigido o nome do campo
      disciplina: ['', [Validators.required]],
      conteudo: ['', [Validators.required]], // Adicionado o campo conteúdo
      data_aula: ['', [Validators.required]],
    });
  }

  goSalaList() {
    this.router.navigate(['/aula']).then();
  }

  save() {
    let formData = this.formGroup.getRawValue();
    Object.assign(this.aula, formData);
    this.aulaService.save(this.aula).subscribe(() => {
      this.router.navigate(['/aula']).then();
    });
  }
}
