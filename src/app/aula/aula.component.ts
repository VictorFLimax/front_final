import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SalaService } from '../services/sala.service';
import { Sala } from '../models/sala';
import {MatCard, MatCardContent, MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-aula',
  templateUrl: './aula.component.html',
  standalone: true,
  imports: [
    MatCardContent,
    MatCardModule
  ],
  styleUrls: ['./aula.component.css']
})
export class AulaComponent implements OnInit {
  salaId: string | null = null;
  sala: Sala | undefined;

  constructor(private route: ActivatedRoute, private salaService: SalaService) {}

  ngOnInit() {
    this.salaId = this.route.snapshot.paramMap.get('id');

    if (this.salaId) {
      this.getSalaDetail(this.salaId);
    }
  }

  getSalaDetail(id: string) {
    this.salaService.getById(id).subscribe(response => {
      this.sala = response;
    });
  }
}
