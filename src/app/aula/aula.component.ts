import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SalaService } from '../services/sala.service';
import { Sala } from '../models/sala';

@Component({
  selector: 'app-aula',
  templateUrl: './aula.component.html',
  standalone: true,
  styleUrls: ['./aula.component.css']
})
export class AulaComponent implements OnInit {
  salaId: string | null = null;
  sala: Sala | undefined;

  constructor(private route: ActivatedRoute, private salaService: SalaService) {}

  ngOnInit() {
    // Captura a ID da sala da URL
    this.salaId = this.route.snapshot.paramMap.get('id');

    // Se a ID estiver presente, busca os detalhes da sala
    if (this.salaId) {
      this.getSalaDetail(this.salaId);
    }
  }

  // Método para obter os detalhes da sala pelo ID
  getSalaDetail(id: string) {
    this.salaService.getById(id).subscribe(response => {
      this.sala = response;
    });
  }
}
