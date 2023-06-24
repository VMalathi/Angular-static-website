import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMenuScrolled = false;
  isSidebarShowing = false;

  @HostListener('window:scroll', ['$event'])
  scrollPage(){
    if(window.pageYOffset>100)
      this.isMenuScrolled = true;
    else
      this.isMenuScrolled = false;
    //console.log(this.isMenuScrolled);
  }
  openSidebar(){
    this.isSidebarShowing = true;
  }
  closeSidebar(){
    this.isSidebarShowing = false;
  }
}
