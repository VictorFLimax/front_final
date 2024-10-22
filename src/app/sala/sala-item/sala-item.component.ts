import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AulaService } from '../../services/aula.service';
import { Sala } from '../../models/sala';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-sala-item',
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
  templateUrl: './sala-item.component.html',
  styleUrls: ['./sala-item.component.css']
})
export class SalaItemComponent implements OnInit {
  formGroup: FormGroup;
  sala: Sala = new Sala();

  constructor(private router: Router,
              private salaService: AulaService,
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
    this.router.navigate(['/sala']).then();
  }

  save() {
    let formData = this.formGroup.getRawValue();
    Object.assign(this.sala, formData);
    this.salaService.save(this.sala).subscribe(() => {
      this.router.navigate(['/sala']).then();
    });
  }
}
