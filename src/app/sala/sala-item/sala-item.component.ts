import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SalaService } from '../../services/sala.service';
import { Sala } from '../../models/sala';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import {NgIf} from '@angular/common';

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
  currentDate: string;

  constructor(private router: Router,
              private salaService: SalaService,
              private formBuilder: FormBuilder) {
  }

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
      disciplina: ['', [Validators.required]],
      assunto: ['', [Validators.required]],
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
