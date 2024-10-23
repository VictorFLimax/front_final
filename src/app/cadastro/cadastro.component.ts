import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { AuthService } from '../services/auth.service';
import {Usuario} from '../models/usuario';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    RouterLink,
    ReactiveFormsModule,
    MatOptionModule,
    MatSelectModule
  ],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  userForm: FormGroup;
  userData: Usuario;


  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.userData = new Usuario();
    this.userForm = new FormGroup({
      apelido: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      perfil: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      const formValues = this.userForm.getRawValue();
      Object.assign(this.userData, formValues);
      this.cadastro();

      this.router.navigate(['/login']).then();
      this.userForm.reset();

    } else {
      console.log('Formulário inválido');
    }
  }

  cadastro() {
    console.log('Dados a serem enviados:', this.userData);
    this.authService.cadastro(this.userData).subscribe({
      next: (response) => {
        console.log('Usuário cadastrado com sucesso:', response);

      },
      error: (error) => {
        console.log('Erro no cadastro:', error);
      }
    });
  }
}
