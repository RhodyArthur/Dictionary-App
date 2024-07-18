import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { SearchComponent } from "./search/search.component";
import { WordDetailsComponent } from "./word-details/word-details.component";
import { ThemeserviceService } from './services/themeservice.service';
import { FormsModule } from '@angular/forms';
import { response } from './interfaces/response.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SearchComponent, WordDetailsComponent,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dictionary-app';

  constructor (private themeService: ThemeserviceService){}

  toggleTheme() {
    this.themeService.toggleDarkMode();
  }

  searchResult!:response[]
  handleSearchResult(meaning:response[]) {
    this.searchResult = meaning;
    console.log('in app comp, def meaning: ', this.searchResult[0].word)
    // console.log('Received search results:', this.searchResult[0].word);
    // Handle data as needed
  }
}
