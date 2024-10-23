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
  currentDate: string;

  constructor(private router: Router,
              private aulaService: AulaService,
              private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createFormGroup();
    this.setCurrentDate();
  }
  setCurrentDate() {
    const today = new Date();
    this.currentDate = today.toISOString().split('T')[0];
    this.formGroup.get('data_aula')?.setValue(this.currentDate);
  }

  createFormGroup() {
    this.formGroup = this.formBuilder.group({
      instituicao: ['', [Validators.required]],
      disciplina: ['', [Validators.required]],
      conteudo: ['', [Validators.required]],
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
