import { Component } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { ApiService } from '../services/api.service';
import { response } from '../interfaces/response.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-word-details',
  standalone: true,
  imports: [],
  templateUrl: './word-details.component.html',
  styleUrl: './word-details.component.css'
})
export class WordDetailsComponent {
  constructor(private apiService: ApiService){}

searchResults$:  any
ngOnInit() {
//   this.apiService.searchResults$.subscribe(data => {
//     this.searchResults = data;
//   });
// }
}}