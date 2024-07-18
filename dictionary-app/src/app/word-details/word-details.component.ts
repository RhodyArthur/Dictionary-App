import { Component, Input } from '@angular/core';
import { ApiService } from '../services/api.service';
import { response } from '../interfaces/response.interface';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-word-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './word-details.component.html',
  styleUrl: './word-details.component.css'
})
export class WordDetailsComponent {
  constructor(private apiService: ApiService){}

// @Input() data: string =''
@Input() data!:response[]

}

