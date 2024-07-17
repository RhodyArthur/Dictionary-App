import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

showDropDown:boolean = false;
selectedFont:string = 'sans serif'

// toggle dropdown menu
toggleDropDown(){
  this.showDropDown = !this.showDropDown
}

// font family selection
selectFont(fontType:string){
  this.selectedFont = fontType;
  this.applyFontToBody();
  this.showDropDown = false;
}

// Apply selected font to body content
applyFontToBody() {
  document.body.style.fontFamily = this.selectedFont;
}
}
