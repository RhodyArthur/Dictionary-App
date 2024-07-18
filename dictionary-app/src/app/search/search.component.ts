import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormsModule } from '@angular/forms';
import { error } from 'console';
import { response } from '../interfaces/response.interface';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{

  data: response[] = [];
  
  constructor(private apiService: ApiService) {}

  searchTerm: string = ''


  @Output()
  searchResult = new EventEmitter<any>();

  ngOnInit(): void {
  }

  searchWord(){
    // validating input field
    if (!this.searchTerm){
      console.log('please enter a value')
      return;
    }
    this.apiService.fetchDefinition(this.searchTerm)
    .pipe(catchError(error => {
      console.error('Error fetching data:', error);
      return of([]);
    }))
    .subscribe(data => {
      console.log(data)
      this.searchResult.emit(data)
    })  
  }

}
