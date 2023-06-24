import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  isMenuScrolled = false;
  
  @HostListener('window:scroll', ['$event'])
  scrollPage(): void{
    if(window.pageYOffset>100)
      this.isMenuScrolled = true;
    else
      this.isMenuScrolled = false;
    //console.log(this.isMenuScrolled);
  }
}
