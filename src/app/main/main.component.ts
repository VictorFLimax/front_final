import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatDrawerContainer, MatSidenavModule } from '@angular/material/sidenav';
import { MatListItem, MatListModule } from '@angular/material/list';
import { MatTabGroup, MatTab } from '@angular/material/tabs';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatIconModule,
    MatIconButton,
    MatSidenavModule,
    MatListModule,
    MatListItem,
    RouterLink,
    MatTabGroup,
    MatTab,
    NgIf
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  exibirImagem: boolean = true;

  constructor(private router: Router) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['login']).then();
    }
  }

  navegarParaSala() {
    this.exibirImagem = false;
    this.router.navigate(['/aula']).then( );
  }
}
